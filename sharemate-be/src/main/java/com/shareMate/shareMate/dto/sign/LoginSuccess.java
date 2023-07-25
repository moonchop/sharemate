package com.shareMate.shareMate.dto.sign;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor
@Data
public class LoginSuccess {
    private String AccToken;
    private String RefToken;
}
