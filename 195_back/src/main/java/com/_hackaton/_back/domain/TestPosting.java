package com._hackaton._back.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Getter
@Setter
@Entity
public class TestPosting {

    @Id
    @GeneratedValue
    private Long id;
    private String testString;
    private Integer testNumber;

    @ElementCollection
    private List<String> testImages;
    private boolean testBoolean;
}
