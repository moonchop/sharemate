package com.shareMate.shareMate.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter


public class GroupDetailDto {

    private int groupID;
    private int userID;

    private String title;
    private String text;
    private int maxNum;
    private int curNum;
    private String kakaoLink;
    private Date created_at;



    @Builder
    public GroupDetailDto(int groupID,String title, String text, int maxNum, int curNum ,String kakaoLink, Date created_at) {
        this.groupID = groupID;
        this.title=title;
        this.text=text;
        this.maxNum=maxNum;
        this.curNum=curNum;
        this.kakaoLink=kakaoLink;
        this.created_at=created_at;
    }

    public GroupDetailDto() {

    }

}


