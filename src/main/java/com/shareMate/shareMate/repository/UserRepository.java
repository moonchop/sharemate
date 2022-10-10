package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Number> {
    Optional<UserEntity> findByEmail(String email);

    @Query("select u from user u join fetch u.favor where u.user_id=:userid")
    Optional<UserEntity> findUserEntityByUser_id(int userid);
    // Optional<UserEntity> findByEmailandPwd(String email, String pwd);
}
