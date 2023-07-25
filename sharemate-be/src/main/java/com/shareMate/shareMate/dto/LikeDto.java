package com.shareMate.shareMate.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@ApiModel(value = "좋아요", description = "유저의 취향 정보를 나타내는 domain class 입니다.")
public class LikeDto {
    @ApiParam(value = "주최 유저의 id", required = true, example = "3")
    private Integer user_from_id;
    @ApiParam(value = "대상 유저의 id", required = true, example = "5")
    private Integer user_to_id;

    public LikeDto(){}
}
