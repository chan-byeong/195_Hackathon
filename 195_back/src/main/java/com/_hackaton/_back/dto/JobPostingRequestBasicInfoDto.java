package com._hackaton._back.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobPostingRequestBasicInfoDto {

    private String companyName;
    private String phoneNumber;
    private String sector;
    private String city;
    private String detailAddress;
    private String employmentPeriod;
    private String workDays;
    private String workHours;
    private int salary;
    private boolean isFoodProvided;
    private boolean isAccommodationProvided;

    @Override
    public String toString() {
        return "JobPostingRequestBasicInfoDto{" +
                "companyName='" + companyName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", sector='" + sector + '\'' +
                ", city='" + city + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", employmentPeriod='" + employmentPeriod + '\'' +
                ", workDays='" + workDays + '\'' +
                ", workHours='" + workHours + '\'' +
                ", salary=" + salary +
                ", isFoodProvided=" + isFoodProvided +
                ", isAccommodationProvided=" + isAccommodationProvided +
                '}';
    }
}