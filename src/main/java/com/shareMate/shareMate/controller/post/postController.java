package com.shareMate.shareMate.controller.post;

import com.shareMate.shareMate.dto.*;
import com.shareMate.shareMate.dto.sign.ResponseSignInDto;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.entity.UserEntity;
import com.shareMate.shareMate.jwt.TokenHelper;
import com.shareMate.shareMate.repository.UserRepository;
import com.shareMate.shareMate.service.PostService;
import com.shareMate.shareMate.service.sign.SignService;
import com.shareMate.shareMate.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Array;
import java.util.*;

@RestController
@RequiredArgsConstructor
@Tag(name="Post",description = "게시글 작성 관련 API")

public class postController {

    private final PostService postService;

    private final UserRepository userRepository;


    //게시글 전체 리스트 조회
    @ApiOperation(value = "커뮤니티 게시글 전체 조회",notes = "커뮤니티 게시글 리스트를 반환합니다.",tags="Post")
    @GetMapping("/posts")
    public ResponseEntity<ArrayList<PostListDto>> getAll(HttpServletRequest request , @RequestParam int page) {


        System.out.println("filter로부터 전달받은 userid: "+request.getAttribute("userid"));
        Page<PostEntity> list = postService.getAllPost(page,4);
        ArrayList<PostListDto> responseList = new ArrayList<>();
        for (PostEntity e : list) {
            Optional<UserEntity> u =userRepository.findById(e.getUserID());
            PostListDto postListDto = new PostListDto(e.getPostID(), e.getUserID(),u.get().getName(), e.getTitle(),e.getText(), e.getCategory(), e.getCreated_at());
            responseList.add(postListDto);
        }
        return ResponseEntity.ok(responseList);
    }
    //게시글 디테일
    @ApiOperation(value = "커뮤니티 게시글 디테일 조회",notes = "게시글 클릭시 게시글 정보를 반환합니다.",tags="Post")
    @GetMapping("/post")
    public ResponseEntity<Optional<PostDetailDto>>getDetail(@RequestParam Integer num){

        Optional<PostDetailDto> postDetailDto = postService.getDetailPost(num);
        return ResponseEntity.ok(postDetailDto);
    }

    //게시글 작성
    @ApiOperation(value = "커뮤니티 게시글 작성",notes = "게시글을 작성합니다.",tags="Post")
    @PostMapping("/post")
    public ResponseEntity addPost(HttpServletRequest request,@RequestBody ReqPostDto post)
    {
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        postService.addPost(user_id,post);
        return  ResponseEntity.ok(HttpStatus.OK);

    }
    @ApiOperation(value="커뮤니티 게시글 수정",tags="Post")
    @PutMapping("/post")
    @ApiParam(value = "파라미터에 대한 설명")
    public ResponseEntity editPost(@RequestParam Integer postid,@RequestBody PostDetailDto post ,HttpServletRequest request){

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
    @ApiOperation(value = "커뮤니티 게시글 삭제",notes = "커뮤니티에 있는 게시글을 삭제합니다.",tags="Post")
    @DeleteMapping("/post")
    public ResponseEntity delPost(@RequestParam Integer postID){

        postService.delPost(postID);
        return ResponseEntity.ok(HttpStatus.OK);

    }


}
