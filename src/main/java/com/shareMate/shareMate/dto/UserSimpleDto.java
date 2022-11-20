package com.shareMate.shareMate.dto;

import com.shareMate.shareMate.entity.UserEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UserSimpleDto
{
    private int user_id;
    private String name;
    private String major;
    private int age;
    private int gender;

    private String profile_photo;
    private List<String> Hashtags;




    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .name(name)
                .major(major)
                .age(age)
                .gender(gender)
                .profile_photo(profile_photo)
                .build();
        return userEntity;
    }

    @Builder
    public UserSimpleDto(int user_id, String name, String major, int age, int gender, String profile_photo) {
        this.user_id = user_id;
        this.name = name;
        this.major = major;
        this.age=age;
        this.gender=gender;
        this.profile_photo = profile_photo;
    }
}
