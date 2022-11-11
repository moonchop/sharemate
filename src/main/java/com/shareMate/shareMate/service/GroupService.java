package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.GroupDetailDto;
import com.shareMate.shareMate.dto.PostDetailDto;
import com.shareMate.shareMate.entity.GroupEntity;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GroupService {


    private final GroupRepository groupRepository;


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
                group.get().getCreated_at()
        ));
        return GroupDetailDto;

    }

    //그룹 생성
    public void addGroup(GroupDetailDto group) {
        GroupEntity groupEntity = new GroupEntity(
                group.getGroupID(),group.getTitle(),group.getText(),group.getMaxNum(),group.getCurNum(),group.getKakaoLink(),group.getCreated_at()

        );

        groupRepository.save(groupEntity);
        return;
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
}









