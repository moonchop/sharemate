package com.shareMate.shareMate.controller.group;

import com.shareMate.shareMate.dto.*;

import com.shareMate.shareMate.entity.GroupEntity;
import com.shareMate.shareMate.entity.PostEntity;

import com.shareMate.shareMate.service.GroupService;
import com.shareMate.shareMate.service.PostService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import java.util.*;

@RestController
@RequiredArgsConstructor
public class groupController {

    private final GroupService groupService;



    //그룹 전체 리스트 조회
    @GetMapping("/groups")
    public ResponseEntity<ArrayList<GroupListDto>> getAll(HttpServletRequest request) {


        System.out.println("filter로부터 전달받은 userid: "+request.getAttribute("userid"));
        List<GroupEntity> list = groupService.getAllGroup();
        ArrayList<GroupListDto> responseList = new ArrayList<>();
        for (GroupEntity e : list) {
            GroupListDto groupListDto = new GroupListDto(e.getGroupID(), e.getUserID(), e.getTitle(), e.getMaxNum(), e.getCurNum(),e.getCreated_at());
            responseList.add(groupListDto);
        }
        return ResponseEntity.ok(responseList);
    }
    //그룹 디테일 조회
    @GetMapping("/group")
    public ResponseEntity<Optional<GroupDetailDto>>getDetail(@RequestParam int num){

        Optional<GroupDetailDto> groupDetailDto = groupService.getDetailGroup(num);
        return ResponseEntity.ok(groupDetailDto);
    }

    //그룹 생성
    @PostMapping("/group")
    public ResponseEntity addGroup(@RequestBody GroupDetailDto group)
    {
        groupService.addGroup(group);
        return  ResponseEntity.ok(HttpStatus.OK);

    }
    //그룹 수정
    @PutMapping("/group")
    public ResponseEntity editPost(@RequestParam int groupID,@RequestBody GroupDetailDto group ,HttpServletRequest request){

        System.out.println(Integer.parseInt(request.getAttribute("userid").toString()));
        Optional<GroupDetailDto> origin_group = groupService.getDetailGroup(groupID);
        //System.out.println("zz "+ origin_post.get().getUser_id() + "/"+origin_post.get().getPost_id());
        if(Integer.parseInt(request.getAttribute("userid").toString() )==origin_group.get().getUserID()){
            System.out.println("같아");
            this.groupService.editGroup(groupID,group);
            return new ResponseEntity(group ,HttpStatus.OK);
        }
        System.out.println("다름");
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    //그룹 삭제
    @DeleteMapping("/group")
    public ResponseEntity delGroup(@RequestParam int postId){

        groupService.delGroup(postId);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    //참가하기 (유저)

    public ResponseEntity joinGroup(HttpServletRequest request ,@RequestParam int groupId){
        final int userid = (int) request.getAttribute("userid");
        groupService.joinGroup(groupId,userid);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    //참여 취소
    public ResponseEntity leaveGroup(HttpServletRequest request ,@RequestParam int groupId){
        final int userid = (int) request.getAttribute("userid");
        groupService.leaveGroup(groupId,userid);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
