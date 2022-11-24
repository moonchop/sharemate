package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel(value = "그룹매칭 리스트", description = "그룹매칭 리스트 전달시 사용하는 domain class입니다.")
public class GroupListDto {
    private Integer group_id;
    private Integer user_id;
    private String title;
    private Integer maxNum;
    private Integer curNum;
    private Date created_at;

    @Builder
    public GroupListDto(Integer group_id,Integer user_id, String title, Integer maxNUm, Integer curNum, Date created_at) {
        this.group_id=group_id;
        this.user_id = user_id;
        this.title=title;
        this.maxNum=maxNUm;
        this.curNum=curNum;
        this.created_at=created_at;
    }
}
