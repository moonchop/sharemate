package com.shareMate.shareMate.dto.sign;

import com.shareMate.shareMate.entity.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel(value = "회원가입" , description = "회원가입시 필요한 데이터")
@NoArgsConstructor
public class RequestSignUpDto {

    @ApiModelProperty(value = "이메일")
    private String email;
    @ApiModelProperty(value = "비밀번혼")
    private String pwd;
    @ApiModelProperty(value = "닉네임")
    private String name;
    @ApiModelProperty(value = "전공")
    private String major;
    @ApiModelProperty(value = "학년")
    private Integer grade;
    @ApiModelProperty(value = "성별")
    private Boolean gender;
    @ApiModelProperty(value = "나이")
    private Integer age;

    @ApiModelProperty(value= "카카오 오픈채팅 링크")
    private String kakao_link;

    @ApiModelProperty(value = "프로필 사진")
    private String profile_photo;


    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .email(email)
                .pwd(pwd)
                .name(name)
                .major(major)
                .grade(grade)
                .gender(gender)
                .age(age)
                .kakao_link(kakao_link)
                .profile_photo(profile_photo)
                .build();
        return userEntity;
    }

//    @Builder
//    public RequestSignUpDto(String email, String pwd, String name, String major, Integer grade, Boolean gender, Integer age, String profile_photo) {
//        this.email = email;
//        this.pwd = pwd;
//        this.name = name;
//        this.major = major;
//        this.grade = grade;
//        this.gender = gender;
//        this.age = age;
//        this.profile_photo = profile_photo;
//    }
}
