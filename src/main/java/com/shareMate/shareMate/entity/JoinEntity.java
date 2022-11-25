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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer joinedID;

    private Integer groupID;


    private Integer userID;

    public JoinEntity() {

    }

    public JoinEntity(int groupID, int user_id) {
        this.groupID=groupID;
        this.userID=user_id;
    }
}
