package com.shareMate.shareMate.entity;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

//@Data
//@AllArgsConstructor
//@Builder

@Table(name="wishlist")
@Entity(name="wishlist")
@Getter
@Setter

public class WishListEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer wishlistID;
    private Integer groupID;

    private String text;


    public WishListEntity(){};
    public WishListEntity(Integer groupID, String text) {
        this.groupID=groupID;
        this.text=text;
    }



}
