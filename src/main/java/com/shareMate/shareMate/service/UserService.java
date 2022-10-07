package com.shareMate.shareMate.service;

import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.RequestUserDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    @ResponseBody
    public Map doLogin(RequestLoginDto requestLoginDto){
        Map json = new HashMap<String,Object>();
        System.out.println("lgser");

        Optional<UserEntity> user = userRepository.findByEmail(requestLoginDto.toEntity().getEmail());
        if (user==null){
            json.put("status","fail");
            json.put("text","존재하지 않는 유저입니다.");
            return json;

        }
        if (user.get().getPwd().equals(requestLoginDto.toEntity().getPwd())) {
            json.put("status","success");
            json.put("text","로그인 성공");
            System.out.println(user.get().getPwd().getClass());
            System.out.println(requestLoginDto.toEntity().getPwd().getClass());

            return json;

        }
        else {
            json.put("status","fail");
            json.put("text","비밀번호가 다릅니다.");
            System.out.println(user.get().getPwd().getClass());
            System.out.println(requestLoginDto.toEntity().getPwd().getClass());
            return json;
        }



    }

    public void doUpdate(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    //  delete
    public void doDelete(int id) {
        userRepository.deleteById(id);
    }
}
