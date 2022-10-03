package com.shareMate.shareMate.service;

import com.shareMate.shareMate.dto.RequestUserDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
class UserServiceTest {
    @Autowired
    UserService userService;
    @Test
    void doInsert() {
        RequestUserDto requestUserDto = RequestUserDto.builder()
                .email("2222@naver.com")
                .name("테스트임")
                .pwd("1234")
                .major("12")
                .grade("23")
                .birth(new Date())
                .kakao_id("123")
                .profile_photo("ssd")
                .create_at(new Date())
                .build();

        userService.doInsert(requestUserDto);
    }
//    @Test
//    void doUpdate(){
////        UserEntity userEntity = new UserEntity();
////        userEntity.setId(3);
////        userEntity.setName("문민수바뀜");
////        userEntity.setEmail("email바뀜");
////        userEntity.setPassword("1234");
////        userEntity.setCreate_at(LocalDateTime.now());
//        UserEntity userEntity  = userService.doSelectOne(1);
//        userEntity.setName("문민수바뀜");
//        userService.doUpdate(userEntity);
//    }
//
//
//    @Test
//    void doDelete() {
//        userService.doDelete(2);
//    }
}