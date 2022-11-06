package com.shareMate.shareMate.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter

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


