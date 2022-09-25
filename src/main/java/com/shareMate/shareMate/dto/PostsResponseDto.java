package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModelProperty;

public class PostsResponseDto {
    @ApiModelProperty(example = "글 아이디")  // Swagger에 해당 필드가 무엇인지 나타냄
    private Long id;

    @ApiModelProperty(example = "글 제목")
    private String title;

    @ApiModelProperty(example = "글 설명")
    private String description;

    @ApiModelProperty(example = "공구 관련 링크")
    private String link;

    @ApiModelProperty(example = "공구 오픈채팅 링크")
    private String contact;

    @ApiModelProperty(example = "공구 가격")
    private String price;

    @ApiModelProperty(example = "공구 날짜")
    private String date;

    @ApiModelProperty(example = "작성자")
    private String author;

}
