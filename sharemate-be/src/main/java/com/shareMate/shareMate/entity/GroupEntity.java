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

@Table(name="groups")
@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class GroupEntity {
    //    @Column(nullable = false,unique = true)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer groupID;

//    @Column(name = "\"userid\"")
    private Integer userID;
    private String title;
    private String text;
//    @Column(name = "\"max_num\"")
    private Integer max_num;
//    @Column(name = "\"cur_num\"")
    private Integer cur_num;
//    @Column(name = "\"kakao_link\"")
    private String kakao_link;

    private String building;
    @CreatedDate
    private Date created_at;


//    @ManyToOne
//    @JoinColumn(name="user_id",insertable = false,updatable = false)
//    private UserEntity user;


//    public GroupEntity() {
//
//    }


}
