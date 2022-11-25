package com.shareMate.shareMate.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ReqPwdDto {
    private String currPwd;
    private String newPwd;

    public  ReqPwdDto(){}
}
