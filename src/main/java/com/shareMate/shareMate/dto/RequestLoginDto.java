package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiParam;
import lombok.Builder;


public class RequestLoginDto {
    

    @ApiParam(value = "사용자 ID" ,required = true)
    private String email;
    @ApiParam(value = "사용자 암호" ,required = true)
    private String pwd;


    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .email(email)
//                .pwd(passwordEncoder.endcode(pwd))
                .pwd(pwd)
                .build();
        return userEntity;
    }

    @Builder
    public RequestLoginDto(String email, String pwd) {
        this.email = email;
        this.pwd = pwd;
    }
}
