package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.FavorEntity;
import com.shareMate.shareMate.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavorRepository extends JpaRepository<FavorEntity,Number> {
    //Optional<UserEntity> findByEmail(String email);

    @Query("select u from user u join fetch u.favor where u.userID=:userid")
    Optional<UserEntity> findUserEntityByUser_id(int userid);
}
