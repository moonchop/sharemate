package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Number> {
    Optional<UserEntity> findByEmail(String email);

    Optional<UserEntity> findUserEntityByEmail(String email);
    Page<UserEntity> findAll(Pageable pageable);
    Page<UserEntity> findAllByGender(Pageable pageable ,boolean gender);
    @Query(value="select b from user b where b.userID in :list")
    Optional<List<UserEntity>> findAllByUserID(List list);

    Page<UserEntity> findUserEntitiesByGender(Pageable pageable, Boolean gender);
//    @Query("select u from user u join fetch u.favor where u.userID=:userid")
//    Optional<UserEntity> findUserEntityByUser_id(int userid);
    // Optional<UserEntity> findByEmailandPwd(String email, String pwd);
}
