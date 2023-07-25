package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@ApiModel(value = "커뮤니티 게시글 ", description = "커뮤니티 게시글의 domain class 입니다.")

public class ReqPostDto {


    private String title;
    private String category;
    private String text;

    @Builder
    public ReqPostDto(String title, String category, String text) {

        this.title=title;
        this.category=category;
        this.text=text;

    }

    public ReqPostDto() {
    }
}


