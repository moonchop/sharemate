package com.shareMate.shareMate.repository;

import com.shareMate.shareMate.entity.ReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<ReportEntity,Number>{


}


