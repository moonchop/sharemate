package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;



@Entity(name="hashtag")
@Table (name="hashtag")
@Getter
@Setter
@RequiredArgsConstructor
public class HashTagEntity {

    @Id
    private int user_id;

    private String hashTag;


    @Builder
    public HashTagEntity(int user_id, String hashTag){
        this.user_id=user_id;
        this.hashTag=hashTag;


    }

    @ManyToOne
    @JoinColumn(name="user_id",insertable = false,updatable = false)
    private UserEntity user;







}
