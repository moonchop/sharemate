package com.shareMate.shareMate.controller.post;

import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.service.PostService;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.*;

@RestController
@RequiredArgsConstructor
public class postController {
    private final UserService userService;
    private final SignService signService;
    private final PostService postService;

    @GetMapping("/posts")
    public ResponseEntity<ArrayList<PostListDto>> getAll() {
        List<PostEntity> list = postService.getAllPost();
        ArrayList<PostListDto> responseList = new ArrayList<>();
        for (PostEntity e : list) {
            PostListDto postListDto = new PostListDto(e.getPostId(), e.getUser_id(), e.getTitle(), e.getCategory(), e.getCreated_at());
            responseList.add(postListDto);
        }
        return ResponseEntity.ok(responseList);
    }

    @GetMapping("/post")
    public ResponseEntity<Optional<PostDetailDto>>getDetail(@RequestParam int num){
        Optional<PostDetailDto> postDetailDto = postService.getDetailPost(num);
        return ResponseEntity.ok(postDetailDto);
    }
}
