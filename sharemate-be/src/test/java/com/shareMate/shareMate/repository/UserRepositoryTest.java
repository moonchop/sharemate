//package com.shareMate.shareMate.repository;
//
//import com.shareMate.shareMate.entity.UserEntity;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//class UserRepositoryTest {
//    @Autowired
//    UserRepository repo;
//    @Test
//    public void testSelectAll(){
//        List<UserEntity> list = repo.findAll();
//
//        for(UserEntity user: list){
//            System.out.println(user.getId());
//            System.out.println(user.getEmail());
//            System.out.println(user.getPassword());
//            System.out.println(user.getName());
//        }
//    }
//    @Test
//    public void testSelectOne(){
//        UserEntity list = repo.findById(1).get();
//
//
//            System.out.println(list.getId());
//            System.out.println(list.getEmail());
//            System.out.println(list.getPassword());
//            System.out.println(list.getName());
//
//    }
//}