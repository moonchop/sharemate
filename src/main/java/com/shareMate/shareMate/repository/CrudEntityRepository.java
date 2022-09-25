package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.CrudEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CrudEntityRepository extends JpaRepository<CrudEntity,Number>{

    @Query(value="select id,title,content from board where id =:id",nativeQuery = true)
    List<CrudEntity> searchParamRepo(@Param("id") int id);
}
