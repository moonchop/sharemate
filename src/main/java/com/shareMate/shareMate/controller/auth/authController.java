package com.shareMate.shareMate.controller.auth;

import com.shareMate.shareMate.config.S3UploadUtil;
import com.shareMate.shareMate.dto.ReportDto;
import com.shareMate.shareMate.dto.ReqSetPwdDto;
import com.shareMate.shareMate.dto.response.DataResponse;
import com.shareMate.shareMate.dto.sign.RequestSignInDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.repository.UserRepository;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@Tag(name="Auth",description = "로그인, 이메일 인증")
@RequestMapping("/sign")
public class authController {
    private final UserService userService;
    private final SignService signService;
    private final UserRepository userRepository;




    @ApiOperation(value = "로그인(JWT 토큰 발급)",notes = "id,pw를 이용하여 로그인을 진행하고, jwt토큰을 발급합니다.",tags="Auth")
    @PostMapping("/login")
    public DataResponse<ResponseSignInDto> UserLogin(@RequestBody RequestSignInDto requestSignInDto){
        ResponseSignInDto req = signService.doLogin(requestSignInDto);
        if(req.getAccessToken()==null){
            throw new UserNotFoundException();
        }
        return new DataResponse(req);
    }
    @ApiOperation(value = "이메일 인증",notes = "아주대 이메일을 입력받아 이메일로 인증번호를 발송합니다.",tags="Auth")
    @PostMapping("/email")
    public ResponseEntity<String > EmailVerification(@RequestBody Map<String,String> email) throws Exception {
        Boolean IsDup = userService.dupCheck(email.get("email"));
        //중복된 이메일
        if (IsDup) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("중복된 이메일입니다.");
        }
        else{
            System.out.println("중복 아님");
             String code = UUID.randomUUID().toString().substring(0, 6); //인증번호 생성
            System.out.println("code : "+code);
            signService.sendMail(code,email.get("email"));
            return ResponseEntity.status(HttpStatus.OK).body(code);
        }
    };
    @ApiOperation(value = "이메일 인증",notes = "아주대 이메일을 입력받아 이메일로 인증번호를 발송합니다.",tags="Auth")
    @PostMapping("/email/new-pwd")
    public ResponseEntity<String> EmailNewPwdVerification(@RequestBody Map<String,String> email) throws Exception {
        Boolean IsDup = userService.dupCheck(email.get("email"));
        //중복된 이메일
        if (IsDup) {
            String code = UUID.randomUUID().toString().substring(0, 6); //인증번호 생성
            System.out.println("code : "+code);
            signService.sendMail(code,email.get("email"));
            return ResponseEntity.status(HttpStatus.OK).body(code);
        }
        else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("중복된 이메일입니다.");


        }
    };
    @ApiOperation(value = "비밀번호 찾기",notes = "비밀번호 재설정 인증번호를 위한 api 입니다.",tags="Auth")
    @PostMapping("/setPwd")
    public ResponseEntity<String > EmailVerification(@RequestBody ReqSetPwdDto reqSetPwdDto) throws Exception {

        UserEntity user =userService.doSelectOneByEmail(reqSetPwdDto.getEmail());
        System.out.println(user.getUserID());
        userService.updatePwd(user.getUserID(), reqSetPwdDto.getPwd());

        return ResponseEntity.status(HttpStatus.OK).body("SUCCESS");
    };

    @ApiOperation(value = "신고하기",notes = "신고하기 기능입니다.",tags="Auth")
    @PostMapping("/report")
    public ResponseEntity<String> Report(HttpServletRequest request,@RequestBody ReportDto reportDto) {

        final Integer user_id = Integer.parseInt(request.getAttribute("userid").toString());
        signService.Report(user_id,reportDto);
        return ResponseEntity.status(HttpStatus.OK).body("SUCCESS");
    };



    @PostMapping("/phototext")
    public ResponseEntity<String> createFeed( @RequestParam("file") MultipartFile file,@RequestBody Map<String,String> json) {
        System.out.println(json.get(json));
        // 시간과 originalFilename으로 매핑 시켜서 src 주소를 만들어 낸다.
        Date date = new Date();
        StringBuilder sb = new StringBuilder();

        // file image 가 없을 경우
        if (file.isEmpty()) {
            sb.append("none");
        } else {
            sb.append(date.getTime());
            sb.append(file.getOriginalFilename());
        }

        if (!file.isEmpty()) {
            File dest = new File("C://images/feed/" + sb.toString());
            System.out.println("C://images/feed/" + sb.toString());
            try {
                file.transferTo(dest);
            } catch (IllegalStateException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        return new ResponseEntity<String>("SUCCESS",HttpStatus.OK);
    }

}
