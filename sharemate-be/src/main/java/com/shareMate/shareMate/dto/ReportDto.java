package com.shareMate.shareMate.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReportDto {

    private Integer userFromID;
    private Integer userToID;
    private Integer postID;
    private String reason;

    public ReportDto(){}
}
