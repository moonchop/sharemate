package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel(value = "회원가입" , description = "회원가입시 사용할 유저의 domain class")

public class UserDto {

    private int user_id;

    private String email;


    private String name;

    private String major;

    private String grade;

    private Date birth;

    private String kakao_id;

    private String profile_photo;

    private Date create_at;


    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .email(email)

                .name(name)
                .major(major)
                .grade(grade)
                .birth(birth)
                .profile_photo(profile_photo)
                .create_at(create_at)
                .build();
        return userEntity;
    }

    @Builder
    public UserDto(int user_id, String email, String pwd, String name, String major, String grade, Date birth, String profile_photo, Date create_at) {
        this.user_id = user_id;
        this.email = email;

        this.name = name;
        this.major = major;
        this.grade = grade;
        this.birth = birth;

        this.profile_photo = profile_photo;
        this.create_at = create_at;
    }
}
