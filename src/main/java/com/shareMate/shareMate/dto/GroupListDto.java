package com.shareMate.shareMate.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class GroupListDto {
    private int group_id;
    private int user_id;
    private String title;
    private int maxNum;
    private int curNum;
    private Date created_at;

    @Builder
    public GroupListDto(int group_id,int user_id, String title, int maxNUm, int curNum, Date created_at) {
        this.group_id=group_id;
        this.user_id = user_id;
        this.title=title;
        this.maxNum=maxNUm;
        this.curNum=curNum;
        this.created_at=created_at;
    }
}
