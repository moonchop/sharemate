package com.shareMate.shareMate.controller.auth;

import com.shareMate.shareMate.dto.ReportDto;
import com.shareMate.shareMate.dto.ReqSetPwdDto;
import com.shareMate.shareMate.dto.response.DataResponse;
import com.shareMate.shareMate.dto.sign.RequestSignInDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.dto.sign.TempUserDto;
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
    public ResponseEntity<Map<String, Object>> UserLogin(@RequestBody RequestSignInDto requestSignInDto){
        System.out.println("???????");
        Map map= signService.doLogin(requestSignInDto);
        if(map.get("user")==null){
            throw new UserNotFoundException();
        }
        return new ResponseEntity<>(map,HttpStatus.OK);

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
    @PostMapping("/upload_ok")
    public String upload(@RequestParam("file") MultipartFile file) {
        String fileRealName = file.getOriginalFilename(); //파일명을 얻어낼 수 있는 메서드!
        long size = file.getSize(); //파일 사이즈

        System.out.println("파일명 : "  + fileRealName);
        System.out.println("용량크기(byte) : " + size);
        //서버에 저장할 파일이름 fileextension으로 .jsp이런식의  확장자 명을 구함
        String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."),fileRealName.length());
        //String uploadFolder = "/Users/kimjihoon/";
        String uploadFolder = "src/main/resources/static";
        File uploadPath= new File(uploadFolder,"upload");
        if (!uploadPath.exists()) {uploadPath.mkdirs();
            System.out.println("폴더만듬");}
		    /*
		  파일 업로드시 파일명이 동일한 파일이 이미 존재할 수도 있고 사용자가
		  업로드 하는 파일명이 언어 이외의 언어로 되어있을 수 있습니다.
		  타인어를 지원하지 않는 환경에서는 정산 동작이 되지 않습니다.(리눅스가 대표적인 예시)
		  고유한 랜던 문자를 통해  db와 서버에 저장할 파일명을 새롭게 만들어 준다.
		 */

        UUID uuid = UUID.randomUUID();
        System.out.println(uuid.toString());
        String[] uuids = uuid.toString().split("-");

        String uniqueName = uuids[0];
        System.out.println("생성된 고유문자열" + uniqueName);
        System.out.println("확장자명" + fileExtension);

        // File saveFile = new File(uploadFolder+"\\"+fileRealName); uuid 적용 전

        File saveFile = new File(uploadFolder+"/upload", uniqueName + fileExtension);  // 적용 후
        try {
            file.transferTo(saveFile); // 실제 파일 저장메서드(filewriter 작업을 손쉽게 한방에 처리해준다.)
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return uploadFolder+"upload/"+uniqueName+fileExtension;
    }

}
