package com.shareMate.shareMate.controller.user;


//import com.shareMate.shareMate.config.ModelMapperConfig;
import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.service.CustomUserDetailService;
import com.shareMate.shareMate.service.user.UserService;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


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
    //private ModelMapper modelMapper;


    public UserController(UserService userService,CustomUserDetailService userDetailsService) {
        this.userService = userService;
        this.userDetailsService=userDetailsService;


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
    public Page<UserEntity> getPostList(@RequestParam("page") int page){
        Page<UserEntity> resultList = userService.getUserList(page, 5);

        return resultList;
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



}
