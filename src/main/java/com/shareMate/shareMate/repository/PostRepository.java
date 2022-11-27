package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.PostEntity;
import com.shareMate.shareMate.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<PostEntity,Number> {
    //Optional<PostEntity> findByEmail(String email);

    //@Query(value="select post.post_id,post.user_id,post.title,post.category,post.created_at from post where post.post_id=:post_id")
    Optional<PostEntity> findPostEntityByPostID(int post_id);

    List<PostEntity> findAll();


}
