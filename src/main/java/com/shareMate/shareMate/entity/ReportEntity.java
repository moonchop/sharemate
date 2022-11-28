package com.shareMate.shareMate.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name="report")
@Table(name="report")
@Getter
@Setter
public class ReportEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reportID;
    private Integer userFromID;
    private Integer userToID;
    private Integer postID;
    private String reason;
}
