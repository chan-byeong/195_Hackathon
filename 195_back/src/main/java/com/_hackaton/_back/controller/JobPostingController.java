package com._hackaton._back.controller;

import com._hackaton._back.domain.JobPosting;
import com._hackaton._back.dto.JobPostingRequestBasicInfoDto;
import com._hackaton._back.dto.JobPostingRequestFileDto;
import com._hackaton._back.service.JobPostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class JobPostingController {

    private final JobPostingService jobPostingService;

    /**
     * HTTP POST 요청을 통해 새로운 구직 공고를 생성합니다. 요청은 MULTIPART_FORM_DATA 형식으로 처리되며,
     * 구직 공고의 기본 정보와 관련된 파일 정보들이 필요합니다.
     *
     * @param basicInfoDto 구직 공고 생성에 필요한 기본 정보를 담고 있는 DTO
     * @param fileDto 구직 공고와 관련된 파일 정보들을 포함한 DTO
     * @return 생성된 구직 공고의 정보와 함께 상태 코드 200을 반환. 실패 시 에러 메시지와 함께 다른 상태 코드를 반환.
     * @throws IOException 구직 공고와 관련된 파일들을 처리하면서 발생할 수 있는 입출력 예외
     */
    @PostMapping(value = "/create-job-posting", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Long> createJobPosting(
            @ModelAttribute JobPostingRequestBasicInfoDto basicInfoDto,
            @ModelAttribute JobPostingRequestFileDto fileDto) throws IOException {

        JobPosting jobPosting = jobPostingService.createJobPosting(basicInfoDto, fileDto);

        return ResponseEntity.ok(jobPosting.getId());
    }

    /**
     * HTTP GET 요청을 통해 주어진 ID에 해당하는 JobPosting 객체를 조회합니다.
     *
     * @param id 조회할 JobPosting의 ID
     * @return 조회된 JobPosting 객체의 ResponseEntity
     */
    @GetMapping(value = "/one-job-posting/{id}")
    public ResponseEntity<JobPosting> getOneJobPosting(@PathVariable Long id){
        JobPosting jobPosting = jobPostingService.getOneJobPosting(id);
        return ResponseEntity.ok(jobPosting);
    }

    /**
     * HTTP GET 요청을 통해 모든 JobPosting 객체를 조회합니다.
     *
     * @return 조회된 JobPosting 객체 리스트의 ResponseEntity
     */
    @GetMapping(value = "/job-postings")
    public ResponseEntity<List<JobPosting>> getAllJobPostings() {
        List<JobPosting> jobPostings = jobPostingService.getAllJobPostings();
        return ResponseEntity.ok(jobPostings);
    }

    /**
     * HTTP GET 요청을 통해 필터링된 구직 공고를 조회합니다. 요청은 쿼리 파라미터 형식으로 처리되며,
     * 구직 공고의 필터링 조건이 필요합니다.
     *
     * @param city 구직 공고 필터링에 필요한 도시 목록
     * @param sector 구직 공고 필터링에 필요한 업종 목록
     * @param minSalary 구직 공고 필터링에 필요한 최소 연봉
     * @param maxSalary 구직 공고 필터링에 필요한 최대 연봉
     * @param isFoodProvided 구직 공고 필터링에 필요한 식사 제공 여부
     * @param isAccommodationProvided 구직 공고 필터링에 필요한 숙소 제공 여부
     * @return 필터링된 구직 공고의 정보와 함께 상태 코드 200을 반환. 실패 시 에러 메시지와 함께 다른 상태 코드를 반환.
     */
    @GetMapping("/filtered-job-postings")
    public ResponseEntity<List<JobPosting>> getFilteredJobs(
            @RequestParam(required = false) List<String> city,
            @RequestParam(required = false) List<String> sector,
            @RequestParam(required = false) Integer minSalary,
            @RequestParam(required = false) Integer maxSalary,
            @RequestParam(required = false) Boolean isFoodProvided,
            @RequestParam(required = false) Boolean isAccommodationProvided) {

        List<JobPosting> jobPostings = jobPostingService.findJobs(city, sector, minSalary, maxSalary, isFoodProvided, isAccommodationProvided);

        return ResponseEntity.ok(jobPostings);
    }
}
