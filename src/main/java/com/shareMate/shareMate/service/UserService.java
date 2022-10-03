package com.shareMate.shareMate.service;

import com.shareMate.shareMate.dto.RequestUserDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> doSelectAll() {
        return userRepository.findAll();
    }

    public UserEntity doSelectOne(int id) {
        return userRepository.findById(id).get();
    }

    //  insert
    public String doInsert(RequestUserDto requestUserDto) {
        System.out.println("service");
        if(userRepository.findByEmail(requestUserDto.toEntity().getEmail()).isPresent()){
            return "동일한 id가 있습니다.";
        }
        else {
            userRepository.save(requestUserDto.toEntity());
            return "유저 추가 완료";
        }

//        userRepository.save(UserEntity.builder().email(userEntity.getEmail()).password(userEntity.getPassword()).name(userEntity.getName()).build());
//        userRepository.save(UserEntity.builder().name(responseUserDto.toEntity().getName()).pwd(responseUserDto.toEntity().getPwd()).email(responseUserDto.toEntity().getEmail()).build());

    }

    public void doUpdate(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    //  delete
    public void doDelete(int id) {
        userRepository.deleteById(id);
    }
}
