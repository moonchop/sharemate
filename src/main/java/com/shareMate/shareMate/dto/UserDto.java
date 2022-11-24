package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserDto {
    private Integer userID;

    private String email;


    private String name;

    private String major;

    private Integer grade;
    private Boolean  gender;
    private Integer age;

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
