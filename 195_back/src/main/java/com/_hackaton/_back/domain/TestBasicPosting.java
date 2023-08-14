package com._hackaton._back.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
@Getter
@Setter
public class TestBasicPosting {
    @Id
    @GeneratedValue
    private Long id;
    private String testString;
    private Integer testNumber;
    private boolean testBoolean;
}
