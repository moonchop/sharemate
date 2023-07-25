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
    private Integer num;

    @Column(name="user_from_id")
    private Integer userFromID;
    @Column(name="user_to_id")
    private Integer userToID;
    public LikeEntity(){};
    public LikeEntity(Integer user_id, Integer target_id) {
        this.userFromID=user_id;
        this.userToID=target_id;
    }
}
