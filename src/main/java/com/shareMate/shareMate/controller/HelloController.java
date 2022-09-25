package com.shareMate.shareMate.controller;

import com.shareMate.shareMate.dto.PostsResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.Response;
import org.springframework.web.bind.annotation.*;

@RestController
@Api(tags = {"Hello"})
public class HelloController {
//    private final UserService userService;
    @GetMapping("/home")
    @ApiOperation(value = "연동 테스트", notes = "스프링부트와 리액트 연동을 테스트한다.")
    public String getHome() {
        return "Hello World!";
    }

    @GetMapping("/posts/{id}")  // 조회 API
    @ApiOperation(value = "테스트", notes = "테스트")
    @ApiImplicitParam(name = "id", value = "테스트 아이디")  // Swagger에 사용하는 파라미터에 대해 설명
    public String findById (@PathVariable Long id) {
        return "1";
    }

}