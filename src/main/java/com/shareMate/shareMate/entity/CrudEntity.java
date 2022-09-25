package com.shareMate.shareMate.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="board")
public class CrudEntity {

    @Id
    @Column(nullable = false,unique = true)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;
}
