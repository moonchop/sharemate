package com.shareMate.shareMate.jwt;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RequiredArgsConstructor
public class TokenHelper {
    private final JwtHandler jwtHandler;
    private final String key;
    private final long maxAgeSeconds;

    public String createToken(String subject) {

        return jwtHandler.createToken(
                key,
                subject,
                maxAgeSeconds);
    }

    //토큰 내용 추출
    public String extractSubject(String token) {
        return jwtHandler.extractSubject(key, token);
    }
    public boolean validate(String token) {
        return jwtHandler.validate(key,token);
    }
}

