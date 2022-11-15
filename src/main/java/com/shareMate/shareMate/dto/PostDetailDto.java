package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@ApiModel(value = "커뮤니티 게시글 ", description = "커뮤니티 게시글의 domain class 입니다.")

public class PostDetailDto {

    private int post_id;
    private int user_id;
    private String title;
    private String category;
    private String text;
    private Date created_at;

    @Builder
    public PostDetailDto(int post_id,int user_id, String title, String category, String text, Date created_at) {
        this.user_id = user_id;
        this.post_id=post_id;
        this.title=title;
        this.category=category;
        this.text=text;
        this.created_at=created_at;
    }

    public PostDetailDto() {

    }
}


