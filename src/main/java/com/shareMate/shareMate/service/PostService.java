package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.PostDetailDto;
import com.shareMate.shareMate.dto.ReqPostDto;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.repository.PostRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {


    private final PostRepository postRepository;

    public Page<PostEntity> getAllPost(Integer page, Integer size ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<PostEntity> list = postRepository.findAll(pageable);

        return list;
    }

    public Optional<PostDetailDto> getDetailPost(int num){
        Optional<PostEntity> post = postRepository.findPostEntityByPostID(num);
        Optional<PostDetailDto> postDetailDto = Optional.of(new PostDetailDto(
                post.get().getPostID(),
                post.get().getUserID(),
                post.get().getTitle(),
                post.get().getCategory(),
                post.get().getText(),
                post.get().getCreated_at()
        ));
        return postDetailDto;

    }

    public void addPost(int  userID, ReqPostDto post) {
        PostEntity postEntity = new PostEntity();

        postEntity.setUserID(userID);
        postEntity.setText(post.getText());
        postEntity.setTitle(post.getTitle());
        postEntity.setCategory(post.getCategory());

        postRepository.save(postEntity);
        return;
    }


    public Optional<PostEntity> editPost (int postid,PostDetailDto post){
        Optional<PostEntity> origin = postRepository.findPostEntityByPostID(postid);
        origin.ifPresent(t->{
            if(post.getText()!=null) t.setText(post.getText());
            if(post.getCategory()!=null) t.setCategory(post.getCategory());
            if(post.getTitle()!=null) t.setTitle(post.getTitle());
            this.postRepository.save(t);
        });
        return origin;
    }
    public void delPost(int num){
        postRepository.deleteById(num);
        return ;
    }
}









