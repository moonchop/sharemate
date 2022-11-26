package com.shareMate.shareMate.dto.sign;

import lombok.*;


@Getter
@Setter
public class ResponseSignUpDto extends TempUserDto {
    private String accessToken;

    public ResponseSignUpDto(Integer userID, String email, String name, String major, Integer grade, Boolean gender, Integer age, String profile_photo,String kakao_link ,
                             String accessToken) {
        super(userID, email, name, major, grade, gender, age, profile_photo,kakao_link);
        this.accessToken = accessToken;
    }

}
