package com._hackaton._back.controller;

import com._hackaton._back.domain.TestBasicPosting;
import com._hackaton._back.domain.TestPosting;
import com._hackaton._back.dto.TestBasicInfoDto;
import com._hackaton._back.dto.TestFileDto;
import com._hackaton._back.service.JobPostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {
    private final JobPostingService jobPostingService;

    @PostMapping(value = "/posting", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Long> testPosting(
            @ModelAttribute TestBasicInfoDto basicInfoDto,
            @ModelAttribute TestFileDto fileDto) throws IOException {

        TestPosting testPosting = jobPostingService.createTestPosting(basicInfoDto, fileDto);

        return ResponseEntity.ok(testPosting.getId());

    }

    @PostMapping(value = "/basicInfo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<TestBasicPosting> testPosting(
            @ModelAttribute TestBasicInfoDto basicInfoDto) throws IOException {

        TestBasicPosting testBasicPosting = jobPostingService.createTestBasicPosting(basicInfoDto);

        return ResponseEntity.ok(testBasicPosting);

    }

}
