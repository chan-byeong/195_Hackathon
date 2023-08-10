package com._hackaton._back.dto;

import lombok.Data;

@Data
public class BusinessConfirmDto {

    public BusinessConfirmDto(String bNo, String pNm, String startDt) {
        this.bNo = bNo;
        this.pNm = pNm;
        this.startDt = startDt;
    }

    private String bNo;  //사업자등록번호(필수)
    private String pNm;  //대표자성명(필수)
    private String startDt;  //개업일자(필수)


}
