package com.shareMate.shareMate.controller.user;
import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.service.CustomUserDetailService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@Api("유저 정보")
public class UserController {
    @Getter
    @Setter
    public class LoginForm {
        private String email;
        private String pwd;

    }
    private final UserService userService;
    private final CustomUserDetailService userDetailsService;
    private final HashtagRepository hashtagRepository;
    public UserController(UserService userService,CustomUserDetailService userDetailsService,HashtagRepository hashtagRepository) {
        this.userService = userService;
        this.userDetailsService=userDetailsService;
        this.hashtagRepository=hashtagRepository;
    }
    @ApiOperation(value ="1:1매칭 유저 리스트 조회",notes = "메인화면에서 나타낼 유저 리스트를 반환하는 요청")
    @GetMapping("/users")
    public ResponseEntity<ArrayList<UserSimpleDto>> getPostList(@RequestParam("page") int page){
        Page<UserEntity> resultList = userService.getUserList(page, 5);

        List<UserEntity> resultDtoList = resultList.getContent();
        ArrayList<UserSimpleDto> responseList = new ArrayList<>();
        for( UserEntity u : resultDtoList){
            UserSimpleDto userDto = new UserSimpleDto(u.getUserID(),u.getName(),u.getMajor(), u.getAge(),u.getGender(), u.getProfile_photo());
            List<String> hash = hashtagRepository.findAllByUserID(u.getUserID());
            userDto.setHashtags(hash);
            responseList.add(userDto);
        }
        return ResponseEntity.ok(responseList);
    }
    @GetMapping("/userAll")
    public ResponseEntity<ArrayList<UserDto>> getUserAll (){
        System.out.println("userall");
        List<UserEntity> list = userService.doSelectAll();
        System.out.println(list);
        ArrayList <UserDto> dtos = new ArrayList<>();
        for (UserEntity u : list){
            UserDto userDto = new UserDto();
            userDto.setUserID(u.getUserID());
            userDto.setAge(u.getAge());
            userDto.setGrade(u.getGrade());
            userDto.setGender(u.getGender());
            userDto.setName(u.getName());
            userDto.setMajor(u.getMajor());
            userDto.setUserID(u.getUserID());
            userDto.setEmail(u.getEmail());
            dtos.add(userDto);
        }
        return ResponseEntity.ok(dtos);


    }
    @ApiOperation(value = "유저 디테일 조회",notes ="유저 클릭시 유저의 디테일한 데이터를 반환합니다.(취향/유저정보)")
    @GetMapping("/user")
    public ResponseEntity<ResUserDetailDto> getUserDetail(@RequestParam("userNum") int num){
        /*favor 가져오는 코드*/
        FavorDto favor = userService.getFavor(num);
        /* User 가져오는 코드*/
        UserDto member = userService.getUserDetail(num);
        System.out.println(favor.getMbti());
        List<String> hashtag = userService.getHashTagList(num);
        ResUserDetailDto resUserDetailDto = new ResUserDetailDto();
        resUserDetailDto.setFavor(favor);
        resUserDetailDto.setUser(member);
        resUserDetailDto.setHashtag_list(hashtag);
        return ResponseEntity.ok(resUserDetailDto);
    }
    @ApiOperation(value = "좋아요 동작",notes = "좋아요 기능을 수행합니다.")
    @GetMapping("/like")
    public ResponseEntity LikeUser(HttpServletRequest request,@RequestParam("userNum") int num){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        userService.doLike(user_id,num);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @ApiOperation(value = "좋아요 취소", notes = "좋아요 기능을 취소합니다.")
    @GetMapping("/unlike")
    public ResponseEntity UnLikeUser(HttpServletRequest request,@RequestParam("userNum") int num) {
        final int user_id = Integer.parseInt(request.getAttribute("userid").toString());
        userService.doUnLike(user_id, num);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    //개인정보 수정
    @ApiOperation(value = "개인정보 수정",notes = "개인정보를 수정합니다.")
    @PutMapping("/user")
    public ResponseEntity editUser (HttpServletRequest request,@RequestParam("userNum") int num,UserDto userDto) {
       // userService.editUser(num,userDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}
