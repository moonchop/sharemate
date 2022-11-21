package com.shareMate.shareMate.entity;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;


@Builder
@Entity(name="user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
public class UserEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "userID",nullable = false)
    private Integer userID;
    @Column(name= "email",nullable = false)
    private String email;
    @Column(name= "pwd",nullable = false)
    private String pwd;
    private String name;
    private String major;
    private Integer grade;
    private Boolean gender;
    private Integer age;
    private String profile_photo;
    @CreatedDate
    private Date created_at;
    @LastModifiedDate
    private Date updated_at;
    @OneToOne
    @JoinColumn(name = "userID")
    private FavorEntity favor;



    public String getPwd(){
        return this.pwd;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
