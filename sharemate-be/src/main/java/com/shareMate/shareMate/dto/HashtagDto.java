package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "해시태그", description = "해시태그에 사용할 domain class 입니다.")
public class HashtagDto {
    private Integer user_id;
    private Integer group_id;
    private String hashTag;

    public HashtagDto(){}
}
