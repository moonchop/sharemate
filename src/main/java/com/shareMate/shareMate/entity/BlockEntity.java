package com.shareMate.shareMate.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name="block")
@Table(name="block")
@Getter
@Setter
public class BlockEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer blockID;
    private Integer userFromID;
    private Integer userToID;
}
