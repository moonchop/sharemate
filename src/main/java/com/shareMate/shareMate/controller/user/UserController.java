package com.shareMate.shareMate.controller.user;


//import com.shareMate.shareMate.config.ModelMapperConfig;
import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.repository.UserRepository;
import com.shareMate.shareMate.service.CustomUserDetailService;
import com.shareMate.shareMate.service.user.UserService;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;


@RestController
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
    //private ModelMapper modelMapper;


    public UserController(UserService userService,CustomUserDetailService userDetailsService,HashtagRepository hashtagRepository) {
        this.userService = userService;
        this.userDetailsService=userDetailsService;
        this.hashtagRepository=hashtagRepository;


    }

    @GetMapping("/main")
    public String main(@RequestParam int num){
        return "Get success : " + num;

    }



    @PostMapping("/list2")
    public String postMethod2(@RequestBody RequestLoginDto requestLoginDto) {
        System.out.println("hello2");

        return requestLoginDto.toEntity().getPwd();
    }

    @GetMapping("/users")
    public ResponseEntity<ArrayList<UserSimpleDto>> getPostList(@RequestParam("page") int page){
        Page<UserEntity> resultList = userService.getUserList(page, 5);

        List<UserEntity> resultDtoList = resultList.getContent();
        ArrayList<UserSimpleDto> responseList = new ArrayList<>();
        for( UserEntity u : resultDtoList){
            UserSimpleDto userDto = new UserSimpleDto(u.getUser_id(),u.getName(),u.getMajor(), u.getGrade(),u.getBirth(), u.getProfile_photo());
            List<String> hash = hashtagRepository.findAllByUser_id(u.getUser_id());
            userDto.setHashtags(hash);
            responseList.add(userDto);
        }
        return ResponseEntity.ok(responseList);
    }
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
    @GetMapping("/like")
    public ResponseEntity LikeUser(HttpServletRequest request,@RequestParam("userNum") int num){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        userService.doLike(user_id,num);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/unlike")
    public ResponseEntity UnLikeUSer(HttpServletRequest request,@RequestParam("userNum") int num) {
        final int user_id = Integer.parseInt(request.getAttribute("userid").toString());
        userService.doUnLike(user_id, num);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}
