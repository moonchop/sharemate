package com.shareMate.shareMate.service.user;

import com.shareMate.shareMate.dto.HashtagDto;
import com.shareMate.shareMate.dto.RequestLoginDto;
import com.shareMate.shareMate.dto.UserDto;
import com.shareMate.shareMate.dto.FavorDto;
import com.shareMate.shareMate.entity.FavorEntity;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.LikeEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.FavorRepository;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.repository.LikeRepository;
import com.shareMate.shareMate.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLOutput;
import java.util.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FavorRepository favorRepository;
    private final HashtagRepository hashtagRepository;

    private final LikeRepository likeRepository;

    public List<UserEntity> doSelectAll() {
        return userRepository.findAll();
    }

//   public UserEntity doSelectOne(int id) {
//        return userRepository.findById(id).get();
//    }


    public Map doInsert(UserDto userDto) {
        Map json = new HashMap<String, Object>();
        System.out.println("service");
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String securePwd = encoder.encode(userDto.toEntity().getPwd());
        System.out.println("암호화 된 비번 " + securePwd);


        if (userRepository.findByEmail(userDto.toEntity().getEmail()).isPresent()) {
            json.put("status", "fail");
            json.put("text", "동일한 id가 있습니다.");
            return json;
        } else {
            userDto.toEntity().setPwd(securePwd);
            UserEntity newUser = userDto.toEntity();
            newUser.setPwd(securePwd);
            System.out.println("새 비번" + newUser.getPwd());


            userRepository.save(newUser);
            json.put("status", "success");
            json.put("text", "회원가입이 완료되었습니다.");
            return json;
        }
//
////        userRepository.save(UserEntity.builder().email(userEntity.getEmail()).password(userEntity.getPassword()).name(userEntity.getName()).build());
////        userRepository.save(UserEntity.builder().name(responseUserDto.toEntity().getName()).pwd(responseUserDto.toEntity().getPwd()).email(responseUserDto.toEntity().getEmail()).build());
//
    }

    @ResponseBody
    public Map doLogin(RequestLoginDto requestLoginDto) {
        Map json = new HashMap<String, Object>();
        System.out.println("lgser");
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Optional<UserEntity> user = userRepository.findByEmail(requestLoginDto.toEntity().getEmail());

        if (user == null) {
            json.put("status", "fail");
            json.put("text", "존재하지 않는 유저입니다.");
            return json;

        }
        if (encoder.matches(requestLoginDto.toEntity().getPwd(), user.get().getPwd())) {
            json.put("status", "success");
            json.put("text", "로그인 성공");
            return json;
        } else {
            json.put("status", "fail");
            json.put("text", "비밀번호가 다릅니다.");
            System.out.println(user.get().getPwd().getClass());
            System.out.println(requestLoginDto.toEntity().getPwd().getClass());
            return json;
        }
    }

    public void doUpdate(int num , UserDto  userDto) {

        UserEntity userEntity = userDto.toEntity();


        userRepository.save(userEntity);
    }

    //  delete
    public void doDelete(int id) {
        userRepository.deleteById(id);
    }

    public Page<UserEntity> getUserList(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<UserEntity> postList = userRepository.findAll(pageable);

        return postList;


    }

    public UserDto getUserDetail(int num) {
        Optional<UserEntity> member = userRepository.findById(num);
        return new UserDto(member.get().getUserID(), member.get().getEmail(),member.get().getName(),member.get().getMajor(),member.get().getGrade(), member.get().getGender(), member.get().getAge(),member.get().getProfile_photo(),member.get().getCreated_at(),member.get().getUpdated_at());

    }

    public List<String> getHashTagList(int num) {
        System.out.println("Zz");
        //Collection<HashTagEntity> hashtagList = hashtagRepository.findAllByUser_id(num);
        List<String> hashtagList = hashtagRepository.findAllByUserID(num);
        System.out.println(hashtagList);
        return hashtagList;

    }


    public FavorDto getFavor(int num) {
        Optional<FavorEntity> member = favorRepository.findById(num);
        FavorDto res = new FavorDto();
        res.setCleanness(member.get().getCleanness());
        res.setMbti(member.get().getMbti());
        res.setUserID(member.get().getUserID());
        res.setDrinking(member.get().getDrinking());
        res.setSnoring(member.get().getSnoring());


        res.setSmoking(member.get().getSmoking());
        res.setSelfIntro(member.get().getSelfIntro());
        res.setStudyTime(member.get().getStudyTime());
        res.setSleepTime(member.get().getSleepTime());
        res.setWakeupTime(member.get().getWakeupTime());

        return res;
    }



    public void doLike(int user_id, int target_id){
        LikeEntity likeEntity = new LikeEntity(user_id,target_id);
        System.out.println("dolike/" + likeEntity.getUserFromID()+ " " +likeEntity.getUserToID());
        System.out.println();
        likeRepository.save(likeEntity);

        return ;
    }

    public void doUnLike(int user_id, int target_id){
        Optional<LikeEntity> like =likeRepository.findLikeEntityByUserFromIDAndUserToID(user_id,target_id);
        likeRepository.delete(like.get());
        return;
    }

    public boolean dupCheck(String email ){

        Optional<UserEntity> user = userRepository.findByEmail(email);
        if(user.isPresent()) return true;
        else return false;
    }


}
