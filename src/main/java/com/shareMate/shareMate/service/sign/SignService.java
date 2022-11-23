package com.shareMate.shareMate.service.sign;


import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.exception.LoginFailureException;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.jwt.TokenHelper;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.persistence.Access;
import java.util.*;

@Service
@RequiredArgsConstructor
public class SignService {
    private final UserRepository userRepository;

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
            message.setSubject("쉐어메이트 회원가입 인증번호입니다.");
            message.setText("이메일 인증코드: "+code);
            message.setFrom("jh6car@naver.com");
            javaMailSender.send(message);
        }catch (MailException mailException){
            mailException.printStackTrace();
            throw  new IllegalAccessException();
        }
    }


    public ResponseSignInDto doLogin(RequestLoginDto requestLoginDto){
        Optional<UserEntity> user = userRepository.findByEmail(requestLoginDto.getEmail());
        if (!user.isPresent()) throw new UserNotFoundException();
        if(passwordEncoder.matches(requestLoginDto.getPwd(),user.get().getPwd()))
        {
            String jwtAccToken = accTokenHelper.createToken( String.valueOf(user.get().getUserID()));
            String jwtRefToken = refTokenHelper.createToken( String.valueOf(user.get().getUserID()));
            return new ResponseSignInDto(jwtAccToken,jwtRefToken);
        }
        throw new LoginFailureException();

    }
}
