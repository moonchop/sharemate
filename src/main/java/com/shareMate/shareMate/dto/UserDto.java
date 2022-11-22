package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel(value = "회원가입" , description = "회원가입시 사용할 유저의 domain class")

public class UserDto {
    private int userID;

    private String email;


    private String name;

    private String major;

    private int grade;
    private Boolean  gender;
    private int age;

    private String profile_photo;

    private Date created_at;
    private Date updated_at;

    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .userID(userID)
                .email(email)
                .name(name)
                .major(major)
                .grade(grade)
                .gender(gender)
                .age(age)
                .profile_photo(profile_photo)
                .created_at(created_at)
                .updated_at(updated_at)
                .build();
        return userEntity;
    }
    public UserDto(){};
    @Builder
    public UserDto(int userID, String email, String name, String major, int grade, boolean gender, int age, String profile_photo, Date created_at, Date updated_at) {
        this.userID = userID;
        this.email = email;

        this.name = name;
        this.major = major;
        this.grade = grade;
        this.gender=gender;
        this.age=age;

        this.profile_photo = profile_photo;
        this.created_at = created_at;
        this.updated_at= updated_at;
    }
}
