package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.dto.HashtagDto;
import com.shareMate.shareMate.dto.LikeDto;
import com.shareMate.shareMate.entity.*;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedNativeQuery;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface JoinRepository extends JpaRepository<JoinEntity,Number> {


    void deleteByGroupIDAndUserID(int groupID,int userID);

    Optional<JoinEntity> findByGroupIDAndUserID(Integer groupID, Integer userID);
    List<JoinEntity> findJoinEntitiesByGroupID(int groupID);

    List<JoinEntity> findAllByGroupID(int groupID);
}
