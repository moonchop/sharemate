package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.GroupDetailDto;
import com.shareMate.shareMate.dto.HashtagDto;
import com.shareMate.shareMate.dto.PostDetailDto;
import com.shareMate.shareMate.dto.WishListDto;
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
    public void addGroup(GroupDetailDto group) {
        GroupEntity groupEntity = new GroupEntity(
                group.getGroupID(),group.getTitle(),group.getText(),group.getMaxNum(),group.getCurNum(),group.getKakaoLink(),group.getBuilding(),group.getCreated_at()

        );
        // hash태그 전부
        for (HashtagDto hastag: group.getHashtags()){
            HashTagEntity hashTagEntity = new HashTagEntity();
            hashTagEntity.setGroupID(hastag.getGroup_id());
            hashTagEntity.setHashTag(hastag.getHashTag());
            hashtagRepository.save(hashTagEntity);
        }
        // wishlist 저장
        for (WishListDto wishlist: group.getWishLists()){
            WishListEntity wishListEntity = new WishListEntity();
            wishListEntity.setGroupID(wishlist.getGroupID());
            wishListEntity.setText(wishListEntity.getText());
            wishListRepository.save(wishListEntity);
        }
        //기타 그룹 정보 저장
        groupRepository.save(groupEntity);
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









