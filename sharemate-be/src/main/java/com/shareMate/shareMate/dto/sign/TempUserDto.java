package com.shareMate.shareMate.dto.sign;

import com.shareMate.shareMate.entity.UserEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TempUserDto {
    private Integer userID;

    private String email;


    private String name;

    private String major;

    private Integer grade;
    private Boolean  gender;
    private Integer age;

    private String profile_photo;

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
                .build();
        return userEntity;
    }

    @Builder
    public TempUserDto(Integer userID, String email, String name, String major, Integer grade, Boolean gender, Integer age, String profile_photo) {
        this.userID = userID;
        this.email = email;
        this.name = name;
        this.major = major;
        this.grade = grade;
        this.gender = gender;
        this.age = age;
        this.profile_photo = profile_photo;
    }
}
