package com.shareMate.shareMate.entity;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Table(name="group")
@Entity(name="group")
@Getter
@Setter
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class GroupEntity {
    //    @Column(nullable = false,unique = true)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer groupID;

    private Integer userID;
    private String title;
    private String text;
    @Column(name = "\"max_num\"")
    private Integer maxNum;
    @Column(name = "\"cur_num\"")
    private Integer curNum;
    @Column(name = "\"kakao_link\"")
    private String kakaoLink;

    private String building;
    @CreatedDate
    private Date created_at;


//    @ManyToOne
//    @JoinColumn(name="user_id",insertable = false,updatable = false)
//    private UserEntity user;


    public GroupEntity() {

    }


}
