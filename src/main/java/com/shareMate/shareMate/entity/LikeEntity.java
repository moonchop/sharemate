package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Table(name="likes")
@Entity(name="likes")
@Getter
@Setter

public class LikeEntity {
//    @Column(nullable = false,unique = true)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num;

    @Column(name="user_from_id")
    private int userFromID;
    @Column(name="user_to_id")
    private int userToID;
    public LikeEntity(){};
    public LikeEntity(int user_id, int target_id) {
        this.userFromID=user_id;
        this.userToID=target_id;
    }
}
