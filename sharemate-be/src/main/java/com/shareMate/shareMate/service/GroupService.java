package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.entity.*;
import com.shareMate.shareMate.repository.GroupRepository;
import com.shareMate.shareMate.repository.HashtagRepository;
import com.shareMate.shareMate.repository.JoinRepository;
import com.shareMate.shareMate.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.*;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
public class GroupService {


    private final GroupRepository groupRepository;
    private final JoinRepository joinRepository;
    private final HashtagRepository hashtagRepository;
    private final WishListRepository wishListRepository;


    //그룹 전체 리스트 조회
    public Page<GroupEntity> getAllGroup(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<GroupEntity> list = groupRepository.findAll(pageable);
        return list;
    }

    //그룹 디테일 조회
    public Optional<GroupDetailDto> getDetailGroup(int num){
        Optional<GroupEntity> group = groupRepository.findGroupEntityByGroupID(num);
        Optional<GroupDetailDto> GroupDetailDto = Optional.of(new GroupDetailDto(
                group.get().getGroupID(),
                group.get().getTitle(),
                group.get().getText(),
                group.get().getMax_num(),
                group.get().getCur_num(),
                group.get().getKakao_link(),
                group.get().getBuilding(),
                group.get().getCreated_at()
        ));
        GroupDetailDto.get().setUserID(group.get().getUserID());
        List <HashTagEntity> hashtags= hashtagRepository.findAllByGroupID(num);
        List<WishListEntity> wishlists= wishListRepository.findAllByGroupID(num);

        List <String> hash_list = new ArrayList<>();
        List <String> wish_list = new ArrayList<>();
        //hashtag 가져오기
        for (HashTagEntity h : hashtags){
            hash_list.add(h.getHashTag());
        }
        //wishlist 가져오기
        for(WishListEntity w : wishlists){
            wish_list.add(w.getText());
        }
        GroupDetailDto.get().setWishLists(wish_list);
        GroupDetailDto.get().setHashtags(hash_list);
        return GroupDetailDto;

    }

    //그룹 생성
    public void addGroup(ReqGroupDto group,int user_id) {


        GroupEntity groupEntity = new GroupEntity();
        groupEntity.setUserID(user_id);
        groupEntity.setBuilding(group.getBuilding());
        groupEntity.setCur_num(1);
        groupEntity.setTitle(group.getTitle());
        groupEntity.setText(group.getText());
        groupEntity.setKakao_link(group.getKakaoLink());
        groupEntity.setMax_num(group.getMaxNum());

        System.out.println("@"+1+"  "+(groupEntity.getUserID())+ " "+groupEntity.getTitle()+"  "+groupEntity.getText());
        //Hashtag 저장
        final int groupID= groupRepository.save(groupEntity).getGroupID();
//        final int groupID =
        System.out.println("@"+2);
        for (String hashtag: group.getHashtags()){
            hashtagRepository.save( new HashTagEntity ( groupID, hashtag));
        }
        // wishlist 저장
        System.out.println("@"+3);
        for (String wishlist: group.getWishLists()){
            wishListRepository.save(new WishListEntity( groupID,wishlist));
        }
        System.out.println("@"+4);
        joinRepository.save(new JoinEntity(groupID,user_id));
        System.out.println("@"+5);
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
        Optional<GroupEntity> group = groupRepository.findGroupEntityByGroupID(group_id);
        group.get().setCur_num(group.get().getCur_num()+1);
        groupRepository.save(group.get());
        return ;
    }
    public void leaveGroup(int group_id, int user_id){
        System.out.println(group_id+" "+user_id);
        System.out.println(joinRepository.findByGroupIDAndUserID(group_id,user_id).get().getJoinedID());

        joinRepository.deleteByGroupIDAndUserID(group_id,user_id);
        System.out.println("delete success");
        Optional<GroupEntity> group = groupRepository.findGroupEntityByGroupID(group_id);
        group.get().setCur_num(group.get().getCur_num()-1);
        groupRepository.save(group.get());
        return ;
    }


}








