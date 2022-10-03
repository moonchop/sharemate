package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import lombok.Builder;

import java.util.Date;

public class RequestUserDto {

    private int user_id;
    private String email;

    private String pwd;
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
                .pwd(pwd)
                .name(name)
                .major(major)
                .grade(grade)
                .birth(birth)
                .kakao_id(kakao_id)
                .profile_photo(profile_photo)
                .create_at(create_at)
                .build();
        return userEntity;
    }

    @Builder
    public RequestUserDto(int user_id, String email, String pwd, String name, String major, String grade, Date birth, String kakao_id, String profile_photo, Date create_at) {
        this.user_id = user_id;
        this.email = email;
        this.pwd = pwd;
        this.name = name;
        this.major = major;
        this.grade = grade;
        this.birth = birth;
        this.kakao_id = kakao_id;
        this.profile_photo = profile_photo;
        this.create_at = create_at;
    }

}
