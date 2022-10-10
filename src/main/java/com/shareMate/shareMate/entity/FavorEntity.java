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
    //    @Column(nullable = false)
    private int sleep_time;
    //    @Column(nullable = false)
    private int wakeup_time;
    //    @Column(nullable = false)
    private int drink;
    //    @Column(nullable = false)
    private int study_time;
    //    @Column(nullable = false)
    private int cleanness;
    //    @Column(nullable = false)
    private int favored_age;
    //    @Column(nullable = false)
    private int same_dept;

    @OneToOne (mappedBy = "favor")
    private UserEntity user ;




}
