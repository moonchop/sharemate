package com.shareMate.shareMate.service;

import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.RequestUserDto;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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


    public Map doInsert(RequestUserDto requestUserDto) {
        Map json = new HashMap<String,Object>();
        System.out.println("service");
        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
        String securePwd = encoder.encode(requestUserDto.toEntity().getPwd());
        System.out.println("암호화 된 비번 "+ securePwd);




        if(userRepository.findByEmail(requestUserDto.toEntity().getEmail()).isPresent()){
            json.put("status","fail");
            json.put("text","동일한 id가 있습니다.");
            return json ;
        }
        else {
            requestUserDto.toEntity().setPwd(securePwd);
            UserEntity newUser= requestUserDto.toEntity();
            newUser.setPwd(securePwd);
            System.out.println("새 비번"+ newUser.getPwd());


            userRepository.save(newUser);
            json.put("status","success");
            json.put("text","회원가입이 완료되었습니다.");
            return json;
        }

//        userRepository.save(UserEntity.builder().email(userEntity.getEmail()).password(userEntity.getPassword()).name(userEntity.getName()).build());
//        userRepository.save(UserEntity.builder().name(responseUserDto.toEntity().getName()).pwd(responseUserDto.toEntity().getPwd()).email(responseUserDto.toEntity().getEmail()).build());

    }
    @ResponseBody
    public Map doLogin(RequestLoginDto requestLoginDto){
        Map json = new HashMap<String,Object>();
        System.out.println("lgser");
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();



        Optional<UserEntity> user = userRepository.findByEmail(requestLoginDto.toEntity().getEmail());

        if (user==null){
            json.put("status","fail");
            json.put("text","존재하지 않는 유저입니다.");
            return json;

        }
        if (encoder.matches(requestLoginDto.toEntity().getPwd(),user.get().getPwd())) {
            json.put("status","success");
            json.put("text","로그인 성공");


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
