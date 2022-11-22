package com.shareMate.shareMate.entity;


import lombok.*;
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

public class GroupEntity {
    //    @Column(nullable = false,unique = true)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int groupID;

    private int userID;
    private String title;
    private String text;
    private int maxNum;
    private int curNum;
    private String kakaoLink;
    private String building;
    private Date created_at;


//    @ManyToOne
//    @JoinColumn(name="user_id",insertable = false,updatable = false)
//    private UserEntity user;


    public GroupEntity() {

    }

    public GroupEntity(int groupID, String title, String text, int maxNum, int curNum, String kakaoLink, String building,Date created_at) {

    }
}
