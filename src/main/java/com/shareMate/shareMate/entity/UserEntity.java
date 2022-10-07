package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder
@Data
@Entity(name="user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(nullable = false,unique = true)
    private int user_id;
//    @Column(nullable = false)
    private String email;
//    @Column(nullable = false)
    private String pwd;
//    @Column(nullable = false)
    private String name;
//    @Column(nullable = false)
    private String major;
//    @Column(nullable = false)
    private String grade;
//    @Column(nullable = false)
    private Date birth;
//    @Column(nullable = false)
    private String kakao_id;
//    @Column(nullable = false)
    private String profile_photo;
//    @Column(nullable = false)
    private Date create_at;


    public String getPwd(){
        return this.pwd;
    }

}
