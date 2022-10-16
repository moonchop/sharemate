package com.shareMate.shareMate.dto.sign;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseSignInDto {
    private String accessToken;
    private String refreshToken;
}
