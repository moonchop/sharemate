package com.shareMate.shareMate.dto;


import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "유저 디테일 ", description = "유저정보,취향, 해시태그를 담은 domain class 입니다.")
public class ResUserDetailDto {
    private UserDto user;
    private FavorDto favor;

    private List<String> hashtag_list;
    public ResUserDetailDto(){}
}
