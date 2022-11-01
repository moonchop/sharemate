package com.shareMate.shareMate.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class FavorDto {


    private int user_id;
    private int sleep_time;
    private int smoking;
    private int wakeup_time;
    private int drinking;

    private int study_time;
    private int cleanness;
    private int prefered_age;
    private int prefered_major;
    private int snoring;

    private String mbti;
    private String self_intro;
    public FavorDto(){};

}


