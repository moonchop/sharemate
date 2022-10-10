package com.shareMate.shareMate.controller;


import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.RequestUserDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.ui.Model;
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

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/main")
    public String main(@RequestParam int num){
        return "Get success : " + num;

    }
    @PostMapping("/register")
    public Map doUserList(@RequestBody RequestUserDto requestUserDto){
        System.out.println("hello"+ requestUserDto);

        return userService.doInsert(requestUserDto);
    }

    @PostMapping("/login")
    public Map UserLogin(@RequestBody RequestLoginDto requestLoginDto){
        System.out.println("lgcon");
        return userService.doLogin(requestLoginDto);
   }
    @PostMapping("/list2")
    public String postMethod2() {
        System.out.println("hello2");
        return "Hello Spring!";
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
