package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;


@Getter
@Setter
@ApiModel(value = "그룹매칭 정보", description = "그룹매칭 게시글의 데이터입니다.")

public class GroupDetailDto {

    @ApiParam(value = "그룹매칭 게시글 ID", required = true, example = "3")
    @ApiModelProperty(notes = "그룹매칭 게시글 ID", example = "1", required = true)
    private int groupID;
    @ApiModelProperty(value = "작성자 ID", required = true, example = "3")
    private int userID;
    @ApiModelProperty(value = "제목", required = true, example = "string")
    private String title;
    @ApiModelProperty(value = "내용", required = true, example = "string")
    private String text;
    @ApiModelProperty(value = "모집인원 수", required = true, example = "3")
    private int maxNum;
    @ApiModelProperty(value = "현재인원 수", required = true, example = "3")
    private int curNum;

    @ApiModelProperty(value = "오픈채팅방 링크", required = true, example = "string")
    private String kakaoLink;
    @ApiModelProperty(value = "기숙사", required = true, example = "string")
    private String building;
    private List<HashtagDto> hashtags ;
    private List<WishListDto> wishLists;
    @ApiModelProperty(value = "작성 날짜", required = true, example = "date")
    private Date created_at;



    @Builder
    public GroupDetailDto(int groupID,String title, String text, int maxNum, int curNum ,String kakaoLink, String building,Date created_at) {
        this.groupID = groupID;
        this.title=title;
        this.text=text;
        this.maxNum=maxNum;
        this.curNum=curNum;
        this.kakaoLink=kakaoLink;
        this.building=building;
        this.created_at=created_at;
    }

    public GroupDetailDto() {

    }

}


