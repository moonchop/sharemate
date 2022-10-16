package com.shareMate.shareMate.controller.user;


import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.service.CustomUserDetailService;
import com.shareMate.shareMate.service.user.UserService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
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
    public Map getUserDetail(@RequestParam("userNum") int num){
        Optional<UserEntity> member = userService.getUserDetail(num);
        Map json = new HashMap<String,Object>();
        Map info = new HashMap<String,Object>();
        System.out.println(member.get());
        json.put("status","success");
        json.put("user_id",member.get().getUser_id());
        info.put("cleanness",member.get().getFavor().getCleanness());
        json.put("favor",info);







        return json;
    }



}
