package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Entity(name="favor")
@Getter
@Setter
public class FavorEntity {

    @Id

//    @Column(nullable = false,unique = true)
    private int user_id;

    private int sleep_time;
    private int smoking;
    private int wakeup_time;
      // @Column(nullable = false)
    private int drinking;
       //@Column(nullable = false)
    private int study_time;
       //@Column(nullable = false)
    private int cleanness;
       //@Column(nullable = false)
    private int prefered_age;
       //@Column(nullable = false)
    private int prefered_major;
    private int snoring;
    private String mbti;
    private String self_intro;







}
