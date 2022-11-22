package com.shareMate.shareMate.controller.auth;

import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.sign.RequestSignUpDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sign")
public class authController {
    private final UserService userService;
    private final SignService signService;

    @ApiOperation(value = "회원가입",notes = "회원가입 버튼 클릭시 회원가입을 진행하는 요청입니다.")

    @PostMapping("/register")
    public Map signUp(@RequestBody RequestSignUpDto requestSignUpDto){
        return userService.doInsert(requestSignUpDto);
    }

    @ApiOperation(value = "로그인(JWT 토큰 발급)",notes = "id,pw를 이용하여 로그인을 진행하고, jwt토큰을 발급합니다. ")
    @ApiParam()
    @PostMapping("/login")
    public ResponseEntity<ResponseSignInDto> UserLogin(@RequestBody RequestLoginDto requestLoginDto){
        ResponseSignInDto responseSignInDto = signService.doLogin(requestLoginDto);
        if(responseSignInDto.getAccessToken()==null){

            throw new UserNotFoundException();
        }
        else return ResponseEntity.status(HttpStatus.OK).body(responseSignInDto);
    }
    @ApiOperation(value = "이메일 인증",notes = "아주대 이메일을 입력받아 이메일로 인증번호를 발송합니다.")
    @PostMapping("/email")
    public ResponseEntity<String > EmailVerification(@RequestBody Map<String,String> email) throws Exception {
        Boolean IsDup = userService.dupCheck(email.get("email"));
        //중복된 이메일
        if (IsDup) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("중복된 이메일입니다.");
        }
        else{
            System.out.println("중복 아님");
            String  code = UUID.randomUUID().toString().substring(0, 6); //인증번호 생성
            System.out.println("code : "+code);
            signService.sendMail(code,email.get("email"));
            return ResponseEntity.status(HttpStatus.OK).body(code);
        }


    };

}
