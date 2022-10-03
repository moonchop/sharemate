package com.shareMate.shareMate.controller;


import com.shareMate.shareMate.dto.RequestUserDto;
import com.shareMate.shareMate.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/main")
    public String main(@RequestParam int num){
        return "Get success : " + num;

    }
    @PostMapping("/list")
    public String doUserList(@RequestBody RequestUserDto requestUserDto){
        System.out.println("hello"+ requestUserDto);

        return userService.doInsert(requestUserDto);
    }
    @PostMapping("/list2")
    public String postMethod2() {
        System.out.println("hello2");
        return "Hello Spring";
    }
}
