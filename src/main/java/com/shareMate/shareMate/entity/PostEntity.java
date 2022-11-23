package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Entity(name="post")
@Getter
@Setter
public class PostEntity {

    @Id
    @Column(name = "post_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postId;
    //    @Column(nullable = false,unique = true)
    @Column(name = "user_id")
    private int user_id;

    private String title;
    private String category;
    private String text;
    private Date created_at;
//    @ManyToOne
//    @JoinColumn(name="user_id",insertable = false,updatable = false)
//    private UserEntity user;








}
