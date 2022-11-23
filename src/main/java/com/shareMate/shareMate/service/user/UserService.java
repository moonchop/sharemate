package com.shareMate.shareMate.service.user;

import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.dto.sign.RequestSignUpDto;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.FavorEntity;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.LikeEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.repository.FavorRepository;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.repository.LikeRepository;
import com.shareMate.shareMate.repository.UserRepository;
import com.shareMate.shareMate.service.sign.SignService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final SignService signService;
    private final LikeRepository likeRepository;

    public List<UserEntity> doSelectAll() {
        return userRepository.findAll();
    }


    public Map doInsert(RequestSignUpDto requestSignUpDto) {
        Map json = new HashMap<String, Object>();
        String originalPwd=requestSignUpDto.getPwd();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String securePwd = encoder.encode(requestSignUpDto.getPwd());


        if (userRepository.findByEmail(requestSignUpDto.getEmail()).isPresent()) {
            json.put("status", "fail");
            json.put("text", "동일한 id가 있습니다.");
            return json;
        } else {
            requestSignUpDto.setPwd(securePwd);
            UserEntity newUser = requestSignUpDto.toEntity();
            newUser.setPwd(securePwd);
            userRepository.save(newUser);
            json.put("status", "success");
            json.put("text", "회원가입이 완료되었습니다.");
            ResponseSignInDto req = signService.doLogin(new RequestLoginDto(newUser.getEmail(),originalPwd));
            json.put("data",(req));
            return json;
        }
//
//
    }

//    사용안함
//    @ResponseBody
//    public Map doLogin(RequestLoginDto requestLoginDto) {
//        Map json = new HashMap<String, Object>();
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        Optional<UserEntity> user = userRepository.findByEmail(requestLoginDto.toEntity().getEmail());
//
//        if (user == null) {
//            json.put("status", "fail");
//            json.put("text", "존재하지 않는 유저입니다.");
//            return json;
//
//        }
//        if (encoder.matches(requestLoginDto.toEntity().getPwd(), user.get().getPwd())) {
//            json.put("status", "success");
//            json.put("text", "로그인 성공");
//            return json;
//        } else {
//            json.put("status", "fail");
//            json.put("text", "비밀번호가 다릅니다.");
//            System.out.println(user.get().getPwd().getClass());
//            System.out.println(requestLoginDto.toEntity().getPwd().getClass());
//            return json;
//        }
//    }

    public void doUpdate(Integer num , UserDto  userDto) {

        UserEntity userEntity = userDto.toEntity();


        userRepository.save(userEntity);
    }

    //  delete
    public void doDelete(Integer id) {
        userRepository.deleteById(id);
    }

    public Page<UserEntity> getUserList(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<UserEntity> postList = userRepository.findAll(pageable);

        return postList;
    }
    public List<UserSimpleDto> getUserLikeList(Integer id){
        List<LikeEntity> likesID = (likeRepository.findByUserFromID(id));
        List<UserSimpleDto> userSimpleList = new ArrayList<>();

        for (LikeEntity like : likesID) {
            Optional<UserEntity> user = userRepository.findById(like.getUserToID());
            List<HashTagEntity> hash = hashtagRepository.findAllByUserID(like.getUserToID());
            List <String> hashes = new ArrayList<>() ;
            for (HashTagEntity h : hash){
                hashes.add(h.getHashTag());
            }
//            UserSimpleDto userSimpleDto = new UserSimpleDto();
//            userSimpleDto.setUserID(user.get().getUserID());
//            userSimpleDto.setName(user.get().getName());
//            userSimpleDto.setMajor(user.get().getMajor());
//            userSimpleDto.setProfile_photo(user.get().getProfile_photo());
//            userSimpleDto.setAge(user.get().getAge());
//            userSimpleDto.setGender(user.get().getGender());
//            userSimpleDto.setHashtags(hashes);
//            userSimpleList.add(userSimpleDto);
            UserSimpleDto userSimpleDto = new UserSimpleDto(
                    user.get().getUserID(),
                    user.get().getName(),
                    user.get().getMajor(),
                    user.get().getAge(),
                    user.get().getGender(),
                    user.get().getProfile_photo());
            userSimpleDto.setHashtags(hashes);
            userSimpleList.add(userSimpleDto);
        }

        return userSimpleList;
    }
//    public Use
    public UserDto getUserDetail(Integer num) {
        Optional<UserEntity> member = userRepository.findById(num);
        return new UserDto(member.get().getUserID(), member.get().getEmail(),member.get().getName(),member.get().getMajor(),member.get().getGrade(), member.get().getGender(), member.get().getAge(),member.get().getProfile_photo(),member.get().getCreated_at(),member.get().getUpdated_at());

    }

    public List<HashTagEntity> getHashTagList(Integer num) {
        //Collection<HashTagEntity> hashtagList = hashtagRepository.findAllByUser_id(num);
        List<HashTagEntity> hashtagList = hashtagRepository.findAllByUserID(num);
        System.out.println(hashtagList);
        return hashtagList;

    }


    public FavorDto getFavor(Integer num) {
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



    public void doLike(Integer user_id, Integer target_id){
        LikeEntity likeEntity = new LikeEntity(user_id,target_id);
        System.out.println("dolike/" + likeEntity.getUserFromID()+ " " +likeEntity.getUserToID());
        System.out.println();
        likeRepository.save(likeEntity);

        return ;
    }

    public void doUnLike(Integer user_id, Integer target_id){
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
