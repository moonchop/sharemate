package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.PostDetailDto;
import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.repository.PostRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {


    private final PostRepository postRepository;

    public List<PostEntity> getAllPost() {
        List<PostEntity> list = postRepository.findAll();

        return list;
    }

    public Optional<PostDetailDto> getDetailPost(int num){
        Optional<PostEntity> post = postRepository.findPostEntityByPostId(num);
        Optional<PostDetailDto> postDetailDto = Optional.of(new PostDetailDto(
                post.get().getPostId(),
                post.get().getUser_id(),
                post.get().getTitle(),
                post.get().getCategory(),
                post.get().getText(),
                post.get().getCreated_at()
        ));
        return postDetailDto;

    }

    public void addPost(PostDetailDto post) {
        PostEntity postEntity = new PostEntity();
        postEntity.setPostId(post.getPost_id());
        postEntity.setUser_id(post.getUser_id());
        postEntity.setText(post.getText());
        postEntity.setTitle(post.getTitle());
        postEntity.setCategory(post.getCategory());

        postRepository.save(postEntity);
        return;
    }


    public Optional<PostEntity> editPost (int postid,PostDetailDto post){
        Optional<PostEntity> origin = postRepository.findPostEntityByPostId(postid);
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









