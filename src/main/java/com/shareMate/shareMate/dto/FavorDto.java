package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "취향 정보", description = "유저의 취향 정보를 나타내는 domain class 입니다.")
public class FavorDto {

    @ApiModelProperty(value = "유저 id", required = true, example = "35")
    private Integer userID;
    @ApiModelProperty(value = "취침시간", required = true, example = "0")
    private String sleepTime;
    @ApiModelProperty(value = "흡연 여부", required = true, example = "1")
    private String smoking;
    @ApiModelProperty(value = "기상시간", required = true, example = "3")
    private String wakeupTime;
    @ApiModelProperty(value = "음주", required = true, example = "1")
    private String drinking;
    @ApiModelProperty(value = "공부시간대", required = true, example = "1")
    private String studyTime;
    @ApiModelProperty(value = "청결도", required = true, example = "1")
    private String cleanness;
    @ApiModelProperty(value = "코골이 여부", required = true, example = "1")
    private String snoring;
    @ApiModelProperty(value = "mbti", required = true, example = "string")
    private String mbti;
    @ApiModelProperty(value = "자기소개", required = true, example = "string")
    private String selfIntro;
    public FavorDto(){};

}


