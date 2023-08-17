package com._hackaton._back.service;

import com._hackaton._back.domain.JobPosting;
import com._hackaton._back.domain.TestBasicPosting;
import com._hackaton._back.domain.TestPosting;
import com._hackaton._back.dto.JobPostingRequestBasicInfoDto;
import com._hackaton._back.dto.JobPostingRequestFileDto;
import com._hackaton._back.dto.TestBasicInfoDto;
import com._hackaton._back.dto.TestFileDto;
import com._hackaton._back.exception.EmptyImageListException;
import com._hackaton._back.exception.ImageUploadException;
import com._hackaton._back.repository.JobPostingRepository;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class JobPostingService {

    private final AmazonS3 amazonS3;
    private final JobPostingRepository jobPostingRepository;


    @Value("${aws.s3.endPoint}")
    private String endPoint;

    @Value("${aws.s3.regionName}")
    private String regionName;

    @Value("${aws.s3.bucketName}")
    private String bucketName;

    private String urlTemplate;

    @PostConstruct
    public void initUrlTemplate() {
        urlTemplate = endPoint + "/" + bucketName + "/";
    }

    /**
     * 새로운 구직 공고를 데이터베이스에 저장합니다.
     *
     * @param requestDto 구직 공고 생성에 필요한 정보를 담고 있는 DTO
     * @return 저장된 구직 공고 엔터티
     */
    @Transactional
    public JobPosting createJobPosting(JobPostingRequestBasicInfoDto requestDto, JobPostingRequestFileDto fileDto){
        JobPosting jobPosting = new JobPosting();
        jobPosting.setTitle(requestDto.getTitle());
        jobPosting.setCompanyName(requestDto.getCompanyName());
        jobPosting.setCompanyName_en(requestDto.getCompanyName_en());
        jobPosting.setPhoneNumber(requestDto.getPhoneNumber());
        jobPosting.setSector(requestDto.getSector());
        jobPosting.setCity(requestDto.getCity());
        jobPosting.setDetailAddress(requestDto.getDetailAddress());
        jobPosting.setDetailAddress_en(requestDto.getDetailAddress_en());
        jobPosting.setEmploymentPeriod(requestDto.getEmploymentPeriod());
        jobPosting.setWorkDays(requestDto.getWorkDays());
        jobPosting.setWorkHours(requestDto.getWorkHours());
        jobPosting.setSalary(requestDto.getSalary());
        jobPosting.setAccommodationProvided(requestDto.isAccommodationProvided());
        jobPosting.setFoodProvided(requestDto.isFoodProvided());
        //데이터베이스에 들어가기 전에 공고 별로 각각의 유일한 폴더를 생성하기 위한 폴더명 생성
        String folderName = UUID.randomUUID().toString() + "/";
        jobPosting.setProfileImage(uploadImagesToCloud(fileDto.getProfileImage(), folderName + "ProfileImage/"));
        jobPosting.setCompanyImages(uploadImagesToCloud(fileDto.getCompanyImages(), folderName + "CompanyImages/"));
        jobPosting.setDetails(uploadImagesToCloud(fileDto.getDetails(), folderName + "Details/"));

        return jobPostingRepository.save(jobPosting);
    }

    /**
     * AWS S3에 이미지를 업로드하는 메서드입니다.
     *
     * @param images 업로드할 이미지 리스트
     * @param specificFolderName 각 이미지 유형별 저장될 폴더명
     * @return 업로드된 이미지의 URL 리스트
     * @throws EmptyImageListException 이미지 리스트가 비어있는 경우 발생합니다.
     */
    private List<String> uploadImagesToCloud(List<MultipartFile> images,String specificFolderName){
        List<String> imageUrls = new ArrayList<>();
        if(images.isEmpty()){
            throw new EmptyImageListException("입력된 이미지가 없습니다.");
        }

        for (MultipartFile image : images) {
            String imageUrl = uploadToCloud(image, specificFolderName);
            imageUrls.add(imageUrl);
        }

        return imageUrls;
    }

    /**
     * AWS S3를 이용해 네이버 클라우드 Object Storage에 개별 이미지를 업로드하는 메서드입니다.
     *
     * @param file 업로드할 이미지 파일
     * @param specificFolderName 이미지가 저장될 폴더명
     * @return 업로드된 이미지의 URL
     * @throws ImageUploadException 이미지 업로드 중 발생한 예외
     */
    private String uploadToCloud(MultipartFile file, String specificFolderName) throws ImageUploadException {
        try {
            String fileName = file.getOriginalFilename();
            String key = specificFolderName + fileName;
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            amazonS3.putObject(new PutObjectRequest(bucketName, key, file.getInputStream(), metadata));

            return urlTemplate + key;
        } catch (IOException e) {
            throw new ImageUploadException("이미지 업로드 중 에러 발생: " + e.getMessage(), e);
        }
    }

    /**
     * 주어진 ID에 해당하는 JobPosting 객체를 조회하는 메서드입니다.
     *
     * @param id 조회할 JobPosting의 ID
     * @return 조회된 JobPosting 객체, 없을 경우 null 반환
     */
    public JobPosting getOneJobPosting(Long id) {
        Optional<JobPosting> jobPostingOptional = jobPostingRepository.findById(id);
        return jobPostingOptional.orElse(null);
    }

    /**
     * 모든 구직 공고(JobPosting)를 조회합니다.
     *
     * @return 조회된 구직 공고 리스트, 구직 공고가 없을 경우 빈 리스트 반환
     */
    public List<JobPosting> getAllJobPostings() {
        return jobPostingRepository.findAll();
    }

    /**
     * 사용자가 지정한 조건에 맞는 구직 공고(JobPosting)를 조회합니다.
     * 조건은 도시, 업종, 최소 연봉, 최대 연봉, 식사 제공 여부, 숙소 제공 여부에 따라 필터링될 수 있으며,
     * 각 조건은 선택 사항입니다.
     *
     * @param cities 구직 공고 필터링에 필요한 도시 목록, null일 경우 도시로 필터링하지 않음
     * @param sectors 구직 공고 필터링에 필요한 업종 목록, null일 경우 업종으로 필터링하지 않음
     * @param minSalary 구직 공고 필터링에 필요한 최소 연봉, null일 경우 최소 연봉으로 필터링하지 않음
     * @param maxSalary 구직 공고 필터링에 필요한 최대 연봉, null일 경우 최대 연봉으로 필터링하지 않음
     * @param isFoodProvided 구직 공고 필터링에 필요한 식사 제공 여부, null일 경우 식사 제공 여부로 필터링하지 않음
     * @param isAccommodationProvided 구직 공고 필터링에 필요한 숙소 제공 여부, null일 경우 숙소 제공 여부로 필터링하지 않음
     * @return 필터링된 구직 공고의 리스트, 조건에 맞는 구직 공고가 없을 경우 빈 리스트 반환
     */
    public List<JobPosting> findJobs(List<String> cities, List<String> sectors, Integer minSalary, Integer maxSalary, Boolean isFoodProvided, Boolean isAccommodationProvided) {
        boolean isEmptyCity = cities == null || cities.isEmpty();
        boolean isEmptySector = sectors == null || sectors.isEmpty();

        return jobPostingRepository.findJobs(cities, isEmptyCity, sectors, isEmptySector, minSalary, maxSalary, isFoodProvided, isAccommodationProvided);
    }

    public TestPosting createTestPosting(TestBasicInfoDto basicInfoDto, TestFileDto fileDto) {
        return null;
    }

    public TestBasicPosting createTestBasicPosting(TestBasicInfoDto basicInfoDto) {
        return null;
    }

}
