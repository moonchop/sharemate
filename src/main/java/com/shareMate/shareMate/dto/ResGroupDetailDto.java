package com.shareMate.shareMate.dto;


import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "그룹 디테일 ", description = "그룹매칭 정보를 담은 domain class 입니다.")
public class ResGroupDetailDto {
    private GroupDetailDto GroupDetailInfo;
    private List<UserSimpleDto> joinedUserList;


    public ResGroupDetailDto(){}
}
