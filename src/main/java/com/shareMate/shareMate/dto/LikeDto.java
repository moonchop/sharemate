package com.shareMate.shareMate.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
public class LikeDto {

    private int user_from_id;
    private int user_to_id;

    public LikeDto(){}
}
