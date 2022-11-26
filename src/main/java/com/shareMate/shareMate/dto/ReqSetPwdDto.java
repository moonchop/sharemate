package com.shareMate.shareMate.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class ReqSetPwdDto{
    private String email;
    private String pwd;


}