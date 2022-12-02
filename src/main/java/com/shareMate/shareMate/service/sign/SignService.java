package com.shareMate.shareMate.service.sign;


import com.shareMate.shareMate.dto.ReportDto;
import com.shareMate.shareMate.dto.response.MessageUtils;
import com.shareMate.shareMate.dto.sign.RequestSignInDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.dto.sign.TempUserDto;
import com.shareMate.shareMate.entity.ReportEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.exception.LoginFailureException;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.jwt.TokenHelper;
import com.shareMate.shareMate.repository.ReportRepository;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SignService {

    private final UserRepository userRepository;
    private final ReportRepository reportRepository;
    private final TokenHelper accTokenHelper;
    private final TokenHelper refTokenHelper;
    private final JavaMailSender javaMailSender;
    private final PasswordEncoder passwordEncoder;

    @AllArgsConstructor
    @Data
    static class LoginSuccessResponse {
        private String token;
    }



    public void sendMail(String code, String email) throws Exception{
        try{

            SimpleMailMessage  message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("[sharemate] 인증번호입니다.");
            message.setText("이메일 인증코드 입니다. : "+code);
            message.setFrom("jh6car@naver.com");
            javaMailSender.send(message);
        }catch (MailException mailException){
            mailException.printStackTrace();
            throw  new IllegalAccessException();
        }
    }


    public Map doLogin(RequestSignInDto requestSignInDto){
        Optional<UserEntity> user = userRepository.findByEmail(requestSignInDto.getEmail());
        Map<String, Object> map = new HashMap<>();
        if (!user.isPresent()) throw new LoginFailureException(MessageUtils.INVALID_SIGNIN);
        if(passwordEncoder.matches(requestSignInDto.getPwd(),user.get().getPwd()))
        {
            String jwtAccToken = accTokenHelper.createToken( String.valueOf(user.get().getUserID()));
            String jwtRefToken = refTokenHelper.createToken( String.valueOf(user.get().getUserID()));
            map.put("token", new ResponseSignInDto(jwtAccToken,jwtRefToken));
            map.put("user",new TempUserDto(
                    user.get().getUserID(),
                    user.get().getEmail(),
                    user.get().getName(),
                    user.get().getMajor(),
                    user.get().getGrade(),
                    user.get().getGender(),
                    user.get().getAge(),
                    user.get().getProfile_photo()
                    ));

            return map;
        }
        throw new LoginFailureException(MessageUtils.INVALID_SIGNIN);

    }

    public void Report(Integer user_id, ReportDto reportDto){
        ReportEntity report = new ReportEntity();
        report.setUserFromID(user_id);
        report.setUserToID(reportDto.getUserToID());
        report.setPostID(reportDto.getPostID());
        report.setReason(reportDto.getReason());

        reportRepository.save(report);
    }
}
