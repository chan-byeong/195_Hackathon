package com._hackaton._back.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobPostingRequestBasicInfoDto {

    private String title;
    private String companyName;
    private String companyName_en;
    private String phoneNumber;
    private String sector;
    private String city;
    private String detailAddress;
    private String detailAddress_en;
    private String employmentPeriod;
    private String workDays;
    private String workHours;
    private int salary;
    private boolean foodProvided;
    private boolean accommodationProvided;

    @Override
    public String toString() {
        return "JobPostingRequestBasicInfoDto{" +
                "companyName='" + companyName + '\'' +
                ", companyName_en='" + companyName_en + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", sector='" + sector + '\'' +
                ", city='" + city + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", detailAddress_en='" + detailAddress_en + '\'' +
                ", employmentPeriod='" + employmentPeriod + '\'' +
                ", workDays='" + workDays + '\'' +
                ", workHours='" + workHours + '\'' +
                ", salary=" + salary +
                ", isFoodProvided=" + foodProvided +
                ", isAccommodationProvided=" + accommodationProvided +
                '}';
    }
}