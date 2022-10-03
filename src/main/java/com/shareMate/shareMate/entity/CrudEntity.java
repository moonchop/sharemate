package com.shareMate.shareMate.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Builder
@ToString
@NoArgsConstructor
@Entity(name="board")
public class CrudEntity {

    @Id
    @GeneratedValue
    @Column(nullable = false,unique = true)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    public CrudEntity(int id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

}
