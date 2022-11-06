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
                post.get().getUser_id(),
                post.get().getPostId(),
                post.get().getTitle(),
                post.get().getCategory(),
                post.get().getText(),
                post.get().getCreated_at()
        ));
        return postDetailDto;

    }
}









