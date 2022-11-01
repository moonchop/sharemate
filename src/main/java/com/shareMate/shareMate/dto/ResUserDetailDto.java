package com.shareMate.shareMate.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResUserDetailDto {
    private UserDto user;
    private FavorDto favor;

    private List<String> hashtag_list;
    public ResUserDetailDto(){}
}
