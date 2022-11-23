package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.entity.*;
import com.shareMate.shareMate.repository.GroupRepository;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.repository.JoinRepository;
import com.shareMate.shareMate.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GroupService {


    private final GroupRepository groupRepository;
    private final JoinRepository joinRepository;
    private final HashtagRepository hashtagRepository;
    private final WishListRepository wishListRepository;


    //그룹 전체 리스트 조회
    public List<GroupEntity> getAllGroup() {
        List<GroupEntity> list = groupRepository.findAll();
        return list;
    }

    //그룹 디테일 조회
    public Optional<GroupDetailDto> getDetailGroup(int num){
        Optional<GroupEntity> group = groupRepository.findGroupEntityByGroupID(num);
        Optional<GroupDetailDto> GroupDetailDto = Optional.of(new GroupDetailDto(
                group.get().getGroupID(),
                group.get().getTitle(),
                group.get().getText(),
                group.get().getMaxNum(),
                group.get().getCurNum(),
                group.get().getKakaoLink(),
                group.get().getBuilding(),
                group.get().getCreated_at()
        ));
        return GroupDetailDto;

    }

    //그룹 생성
    public void addGroup(ReqGroupDto group,int user_id) {
        GroupEntity groupEntity = new GroupEntity();
        System.out.println(group.getBuilding());
        groupEntity.setUserID(user_id);
        groupEntity.setBuilding(group.getBuilding());
        groupEntity.setCurNum(1);
        groupEntity.setTitle(group.getTitle());
        groupEntity.setText(group.getText());
        groupEntity.setKakaoLink(group.getKakaoLink());
        groupEntity.setMaxNum(group.getMaxNum());
        System.out.println(groupEntity);
        final int groupID= groupRepository.save(groupEntity).getGroupID();
        System.out.println(groupID);
        //System.out.println(obj);

        // group save하고 groupID를 받아오는 작업을 필요로 함 .

        // hash태그 전부

        for (Map<String,Object> hashtag: group.getHashtags()){
            hashtagRepository.save( new HashTagEntity ( groupID, (String) hashtag.get(Integer.toString(1))));
            hashtagRepository.save( new HashTagEntity ( groupID, (String) hashtag.get(Integer.toString(2))));
            hashtagRepository.save( new HashTagEntity ( groupID, (String) hashtag.get(Integer.toString(3))));
        }
        // wishlist 저장

        for (Map<String,Object> wishlist: group.getWishLists()){

            wishListRepository.save(new WishListEntity( groupID,(String) wishlist.get(Integer.toString(1))));
            wishListRepository.save(new WishListEntity( groupID,(String) wishlist.get(Integer.toString(2))));
            wishListRepository.save(new WishListEntity( groupID,(String) wishlist.get(Integer.toString(3))));
            wishListRepository.save(new WishListEntity( groupID,(String) wishlist.get(Integer.toString(4))));
            wishListRepository.save(new WishListEntity( groupID,(String) wishlist.get(Integer.toString(5))));



        }
        //기타 그룹 정보 저장

        return;
    }


    //hashtags 배열 반환
    public List<HashtagDto> getHashtags (int num){
        List<HashTagEntity> result = hashtagRepository.findAllByGroupID(num);
        List <HashtagDto> hastags= new ArrayList<>();
        for (HashTagEntity hash : result ){
            HashtagDto temp = new HashtagDto();
            temp.setGroup_id(hash.getGroupID());
            temp.setHashTag(hash.getHashTag());
            hastags.add(temp);
        }

        return hastags;

    }
    public List<WishListDto> getWishlist (int num){
        List<WishListEntity> result = wishListRepository.findAllByGroupID(num);
        List <WishListDto> wishlist= new ArrayList<>();
        for (WishListEntity wish : result ){
            WishListDto temp = new WishListDto();
            temp.setGroupID(wish.getGroupID());
            temp.setText(wish.getText());
            wishlist.add(temp);
        }

        return wishlist;

    }


    public void editGroup (int groupID,GroupDetailDto group){
        Optional<GroupEntity> origin = groupRepository.findGroupEntityByGroupID(groupID);
        origin.ifPresent(t->{
            if(group.getText()!=null) t.setText(group.getText());
            if(group.getTitle()!=null) t.setTitle(group.getTitle());
            if(group.getKakaoLink()!=null) t.setTitle(group.getKakaoLink());
            this.groupRepository.save(t);
        });
        return ;
    }
    public void delGroup(int num){
        groupRepository.deleteById(num);
        return ;
    }

    public void joinGroup(int group_id, int user_id){
        JoinEntity joinEntity= new JoinEntity(group_id,user_id);
        joinRepository.save(joinEntity);
        return ;
    }
    public void leaveGroup(int group_id, int user_id){
        JoinEntity joinEntity= new JoinEntity(group_id,user_id);
        joinRepository.delete(joinEntity);
        return ;
    }


}









