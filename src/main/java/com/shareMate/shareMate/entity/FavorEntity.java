package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Entity(name="favor")
@Table(name="favor")
@Getter
@Setter
public class FavorEntity {

    @Id
    private int userID;
    private String sleepTime;
    private String smoking;
    private String wakeupTime;
      // @Column(nullable = false)
    private String drinking;
       //@Column(nullable = false)
    private String studyTime;
       //@Column(nullable = false)
    private String cleanness;
    private String snoring;
    private String mbti;
    private String selfIntro;

    @OneToOne(mappedBy = "favor")
    private UserEntity user;




}
