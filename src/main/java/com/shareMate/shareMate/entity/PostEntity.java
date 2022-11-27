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

@Entity(name="post")
@Data
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postId")
    private Integer postID;
    //    @Column(nullable = false,unique = true)

    private Integer userID;

    private String title;
    private String category;
    private String text;
    @CreatedDate
    private Date created_at;
//    @ManyToOne
//    @JoinColumn(name="user_id",insertable = false,updatable = false)
//    private UserEntity user;








}
