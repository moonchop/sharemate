package com.shareMate.shareMate.dto.sign;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@ApiModel(value = "로그인 ", description = "로그인할 때 필요한 domain class 입니다.")
public class RequestSignInDto {
    

    @ApiParam(value = "사용자 ID" ,required = true)
    private String email;
    @ApiParam(value = "사용자 암호" ,required = true)
    private String pwd;


    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .email(email)
                .pwd(pwd)
                .build();
        return userEntity;
    }

//    @Builder
//    public RequestSignInDto(String email, String pwd) {
//        this.email = email;
//        this.pwd = pwd;
//    }
}
