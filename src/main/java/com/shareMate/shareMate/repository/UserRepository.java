package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Number> {
    Optional<UserEntity> findByEmail(String email);
}
