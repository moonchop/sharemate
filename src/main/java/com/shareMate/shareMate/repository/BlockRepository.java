package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.BlockEntity;
import com.shareMate.shareMate.entity.FavorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlockRepository extends JpaRepository<BlockEntity,Number> {
    Optional<List<BlockEntity>> findAllByUserFromID(int userFromID);
}