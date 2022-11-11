package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;

//@Data
//@AllArgsConstructor
//@Builder

@Table(name="joined")
@Entity(name="joined")
@Getter
@Setter
@AllArgsConstructor
public class JoinEntity {
    //    @Column(nullable = false,unique = true)
    @Id
    @Column(name = "group_id")
    private int groupID;

    @Column(name="user_id")
    private int userID;

    public JoinEntity() {

    }
}
