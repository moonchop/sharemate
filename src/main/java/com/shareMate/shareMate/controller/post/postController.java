package com.shareMate.shareMate.controller.post;

import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.jwt.TokenHelper;
import com.shareMate.shareMate.service.PostService;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Array;
import java.util.*;

@RestController
@RequiredArgsConstructor
public class postController {
    private final UserService userService;
    private final SignService signService;
    private final PostService postService;
    private final TokenHelper tokenHelper;


    //게시글 전체 리스트 조회
    @GetMapping("/posts")
    public ResponseEntity<ArrayList<PostListDto>> getAll(HttpServletRequest request) {


        System.out.println("filter로부터 전달받은 userid: "+request.getAttribute("userid"));
        List<PostEntity> list = postService.getAllPost();
        ArrayList<PostListDto> responseList = new ArrayList<>();
        for (PostEntity e : list) {
            PostListDto postListDto = new PostListDto(e.getPostId(), e.getUser_id(), e.getTitle(), e.getCategory(), e.getCreated_at());
            responseList.add(postListDto);
        }
        return ResponseEntity.ok(responseList);
    }
    //게시글 디테일 조회
    @GetMapping("/post")
    public ResponseEntity<Optional<PostDetailDto>>getDetail(@RequestParam int num){

        Optional<PostDetailDto> postDetailDto = postService.getDetailPost(num);
        return ResponseEntity.ok(postDetailDto);
    }

    //게시글 작성
    @PostMapping("/post")
    public ResponseEntity addPost(@RequestBody PostDetailDto post)
    {
        postService.addPost(post);
        return  ResponseEntity.ok(HttpStatus.OK);

    }
    //게시글 수정
    @PutMapping("/post")
    public ResponseEntity editPost(@RequestParam int postid,@RequestBody PostDetailDto post ,HttpServletRequest request){
        System.out.println("+++");
        System.out.println(Integer.parseInt(request.getAttribute("userid").toString()));
        Optional<PostDetailDto> origin_post = postService.getDetailPost(postid);
        System.out.println("zz "+ origin_post.get().getUser_id() + "/"+origin_post.get().getPost_id());
        if(Integer.parseInt(request.getAttribute("userid").toString() )==origin_post.get().getUser_id()){
            System.out.println("같아");
            Optional<PostEntity> postDto= this.postService.editPost(postid,post);
            return new ResponseEntity(postDto ,HttpStatus.OK);
        }
        System.out.println("다름");
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    //게시글 삭제
    @DeleteMapping("/post")
    public ResponseEntity delPost(@RequestParam int postId){

        postService.delPost(postId);
        return ResponseEntity.ok(HttpStatus.OK);

    }


}
