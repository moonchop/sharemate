package com.shareMate.shareMate.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PostListDto {
    private int post_id;
    private int user_id;
    private String title;
    private String category;
    private Date created_at;

    @Builder
    public PostListDto(int post_id,int user_id, String title, String category,  Date created_at) {
        this.user_id = user_id;
        this.post_id=post_id;
        this.title=title;
        this.category=category;

        this.created_at=created_at;
    }
}
