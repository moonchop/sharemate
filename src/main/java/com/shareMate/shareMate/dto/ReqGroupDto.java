package com.shareMate.shareMate.dto;

import com.sun.istack.NotNull;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;


@Getter
@Setter
@ApiModel(value = "그룹매칭 정보", description = "그룹매칭 게시글의 데이터입니다.")
@Data
public class ReqGroupDto {

    @ApiModelProperty(value = "제목", required = true, example = "string")
    private String title;
    @ApiModelProperty(value = "내용", required = true, example = "string")
    private String text;
    @ApiModelProperty(value = "모집인원 수", required = true, example = "3")
    private int maxNum;

    @ApiModelProperty(value = "오픈채팅방 링크", required = true, example = "string")
    private String kakaoLink;
    @ApiModelProperty(value = "기숙사", required = true, example = "string")
    private String building;
    @NotNull
    private List<String> hashtags ;
    private List<String> wishLists;
    @ApiModelProperty(value = "작성 날짜", required = true, example = "date")
    private Date created_at;



    @Builder
    public ReqGroupDto(String title, String text, int maxNum,String kakaoLink, String building,Date created_at) {

        this.title=title;
        this.text=text;
        this.maxNum=maxNum;

        this.kakaoLink=kakaoLink;
        this.building=building;
        this.created_at=created_at;
    }

    public ReqGroupDto() {

    }

}


