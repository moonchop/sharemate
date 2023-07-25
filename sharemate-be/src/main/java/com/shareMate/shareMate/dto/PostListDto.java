package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@ApiModel(value = "커뮤니티 게시글 리스트", description = "커뮤니티 게시글의 리스트 domain class 입니다.")
public class PostListDto {
    private Integer post_id;
    private Integer user_id;
    private String username;
    private String title;
    private String text;
    private String category;
    private Date created_at;

    @Builder
    public PostListDto(Integer post_id,Integer user_id,String username, String title,String text, String category,  Date created_at) {
        this.user_id = user_id;
        this.username=username;
        this.post_id=post_id;
        this.title=title;
        this.text=text;
        this.category=category;

        this.created_at=created_at;
    }
}
