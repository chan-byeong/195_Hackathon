package com._hackaton._back.domain;


import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "users")
@Data
@NoArgsConstructor
public class User {

    /*
     *
     * 생성자
     *
     * */
    @Builder
    public User(String username,String userDetailName, String password, String email, String role, String locale
            , String provider, String providerId, Timestamp createDate){
        this.username = username;
        this.userDetailName = userDetailName;
        this.password = password;
        this.email = email;
        this.role = role;
        this.locale = locale;
        this.provider = provider;
        this.providerId = providerId;
        this.createDate = createDate;
    }

    /*
     *
     * 기본적인 유저 정보
     *
     * */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; //자동생성
    private String username;
    private String userDetailName;
    private String password;
    private String email;
    private String role; //ROLE_COMMON, ROLE_CEO
    private String locale;

    /*
     *
     * 로그인한 플랫폼에 따른 정보
     *
     * */
    private String provider;
    private String providerId;

    /*
     *
     * 최근 로그인한 시간
     *
     * */
    @CreationTimestamp
    private Timestamp createDate;


}
