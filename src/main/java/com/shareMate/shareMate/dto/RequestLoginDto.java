package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import lombok.Builder;


public class RequestLoginDto {

    private String email;
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
