package com.shareMate.shareMate.jwt;


import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component

public class JwtHandler {
    //    private final CustomUserDetailsService userDetailsService;
    //type으로 지정한 "Bearer"는, 생성해낸 토큰이 어떤 타입인지(여기서는 jwt)를 나타냄
    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;




    public String createToken(String encodedKey, String subject, long maxAgeSeconds) {
        Date now = new Date();
        return   Jwts.builder()
                .setSubject(subject) //토큰에 저장될 데이터 지정
                .setIssuedAt(now) //토큰 발급일 지정(초 단위인데 Date는 ms이기에 1000곱함)
//                .setExpiration(new Date(now.getTime() + maxAgeSeconds * 1000L)) //토큰 만료 일자를 지정
                .signWith(signatureAlgorithm, encodedKey) //파라미터로 받은 key로 SHA-256알고리즘 사용하여 서명
                .compact(); //토큰 발급
    }

    public String extractSubject(String encodedKey, String token) {
        System.out.println("토큰 내용 추출: "+Jwts.parserBuilder().setSigningKey(encodedKey).build().parseClaimsJws(token).getBody().getSubject());
        return Jwts.parserBuilder().setSigningKey(encodedKey).build().parseClaimsJws(token).getBody().getSubject();
        //토큰에서 subject를 추출함 -> 사용자 인증 위(user의 id 추출해서 저장예정)
    }


    //현재 사용 X
    public boolean validate(String encoded,String token) { //String encoded
        //토큰의 유효성을 검증함. 예외 발생하면 유효하지 않은 토큰으로 판단
        try {
            extractSubject(encoded,token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
