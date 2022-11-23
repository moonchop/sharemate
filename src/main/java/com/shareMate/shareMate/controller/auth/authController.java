package com.shareMate.shareMate.controller.auth;

import com.shareMate.shareMate.dto.response.DataResponse;
import com.shareMate.shareMate.dto.sign.RequestSignInDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name="Auth",description = "로그인, 이메일 인증")
@RequestMapping("/sign")
public class authController {
    private final UserService userService;
    private final SignService signService;


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
            String  code = UUID.randomUUID().toString().substring(0, 6); //인증번호 생성
            System.out.println("code : "+code);
            signService.sendMail(code,email.get("email"));
            return ResponseEntity.status(HttpStatus.OK).body(code);
        }


    };

}
