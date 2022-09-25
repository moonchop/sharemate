package com.shareMate.shareMate.entity;



import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.soap.Text;
import java.util.Date;

public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    private String name;

    private String pwd;

    private String major;

    private String grade;

    private Date birth;

    private String kakao_id;

    private Text info;

    private String profile_photo;

    private Date create_date;

}
