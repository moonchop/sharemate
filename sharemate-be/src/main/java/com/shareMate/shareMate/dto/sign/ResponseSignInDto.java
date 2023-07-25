package com.shareMate.shareMate.dto.sign;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseSignInDto{
    private String accessToken;
    private String refreshToken;

    public ResponseSignInDto(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
