package com._hackaton._back.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class TestFileDto {
    private List<MultipartFile> testImages;
}
