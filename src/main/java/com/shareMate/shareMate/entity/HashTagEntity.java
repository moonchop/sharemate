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
    private int hashtagID;
    private int userID;

    private int groupID;

    private String hashTag;


    @Builder
    public HashTagEntity(int user_id, int group_id,String hashTag){
        this.userID=user_id;
        this.groupID=group_id;
        this.hashTag=hashTag;

    }

    @ManyToOne
    @JoinColumn(name="userID",insertable = false,updatable = false)
    private UserEntity user;







}
