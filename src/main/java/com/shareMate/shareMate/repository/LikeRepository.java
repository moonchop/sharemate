package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.dto.HashtagDto;
import com.shareMate.shareMate.dto.LikeDto;
import com.shareMate.shareMate.entity.FavorEntity;
import com.shareMate.shareMate.entity.HashTagEntity;
import com.shareMate.shareMate.entity.LikeEntity;
import com.shareMate.shareMate.entity.UserEntity;
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
public interface LikeRepository extends JpaRepository<LikeEntity,Number> {


   Optional<LikeEntity> findLikeEntityByUserFromIDAndUserToID(Integer userFromID, Integer userToID);
   List<LikeEntity> findByUserFromID(Integer userFromID);

}
