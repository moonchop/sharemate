package com.shareMate.shareMate.controller.user;
import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.dto.response.DataResponse;
import com.shareMate.shareMate.dto.sign.RequestSignUpDto;
import com.shareMate.shareMate.dto.sign.ResponseSignUpDto;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.service.CustomUserDetailService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import io.swagger.v3.oas.annotations.tags.Tag;
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
import java.util.Optional;

@RestController
@Api("유저 정보")
@RequestMapping("/user")
@Tag(name="User",description = "회원가입, 자기소개, 메인 페이지 기능 포함")
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
    @ApiOperation(value = "회원가입",notes = "회원가입을 진행하고, jwt 토큰을 반환합니다.",tags="User")
    @PostMapping("")
    public DataResponse<ResponseSignUpDto> signUp(@RequestBody RequestSignUpDto requestSignUpDto){
        ResponseSignUpDto req = userService.doInsert(requestSignUpDto);
        return new DataResponse<>(req);
    }
    @ApiOperation(value ="1:1매칭 유저 리스트 조회",notes = "메인화면에서 나타낼 유저 리스트를 반환하는 요청",tags="User")
    @GetMapping("/list")
    public ResponseEntity<ArrayList<UserSimpleDto>> getPostList(@RequestParam("page") int page){
        Page<UserEntity> resultList = userService.getUserList(page, 12);

        List<UserEntity> resultDtoList = resultList.getContent();
        ArrayList<UserSimpleDto> responseList = new ArrayList<>();
        for( UserEntity u : resultDtoList){
            UserSimpleDto userDto = new UserSimpleDto(u.getUserID(),u.getName(),u.getMajor(), u.getAge(),u.getGender(), u.getProfile_photo());

            List<HashTagEntity> hashtag = userService.getHashTagList(u.getUserID());
            List<String>  hashtagDtos = new ArrayList<>();
            for (HashTagEntity h : hashtag){
                hashtagDtos.add(h.getHashTag());
            }
            userDto.setHashtags(hashtagDtos);
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
    @ApiOperation(value = "유저 디테일 조회",notes ="유저 클릭시 유저의 디테일한 데이터를 반환합니다.(취향/유저정보)",tags = "User")
    @GetMapping("/detail")
    public ResponseEntity<ResUserDetailDto> getUserDetail(@RequestParam("id") Integer num){
        /*favor 가져오는 코드*/
        FavorDto favor = userService.getFavor(num);
        /* User 가져오는 코드*/
        UserDto member = userService.getUserDetail(num);
        System.out.println(favor.getMbti());
        List<HashTagEntity> hashtag = userService.getHashTagList(num);
        List<String>  hashtagDtos = new ArrayList<>();
        for (HashTagEntity h : hashtag){
            hashtagDtos.add(h.getHashTag());
        }
        ResUserDetailDto resUserDetailDto = new ResUserDetailDto();
        resUserDetailDto.setFavor(favor);
        resUserDetailDto.setUser(member);
        resUserDetailDto.setHashtag_list(hashtagDtos);
        return ResponseEntity.ok(resUserDetailDto);
    }
    @ApiOperation(value = "좋아요 동작",notes = "좋아요 기능을 수행합니다.",tags="User")
    @PostMapping("/like/{id}")
    public ResponseEntity LikeUser(HttpServletRequest request,@PathVariable("id") Integer num){
        final Integer user_id =Integer.parseInt(request.getAttribute("userid").toString());
        userService.doLike(user_id,num);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @ApiOperation(value = "좋아요 취소", notes = "좋아요 기능을 취소합니다.",tags="User")
    @PostMapping("/unlike/{id}")
    public ResponseEntity UnLikeUser(HttpServletRequest request,@PathVariable("id") Integer num) {
        final Integer user_id = Integer.parseInt(request.getAttribute("userid").toString());
        userService.doUnLike(user_id, num);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @ApiOperation(value="유저 좋아요 리스트",notes="유저가 좋아요 한 다른 유저들을 조회할 수 있습니다.",tags="User")
    @GetMapping("/likelist")
    public List<UserSimpleDto> getLikeList(@RequestParam("id") Integer id){

        return userService.getUserLikeList(id);
    }
    //개인정보 수정
    @ApiOperation(value = "개인정보 수정",notes = "개인정보를 수정합니다.",tags="User")
    @PutMapping("")
    public ResponseEntity editUser (HttpServletRequest request,@RequestParam("id") Integer num,UserDto userDto) {
       // userService.editUser(num,userDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}
