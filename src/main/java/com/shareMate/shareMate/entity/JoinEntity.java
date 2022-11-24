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

    private Integer groupID;


    private Integer userID;

    public JoinEntity() {

    }
}
