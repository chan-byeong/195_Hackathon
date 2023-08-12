package com._hackaton._back.controller;


import com._hackaton._back.config.auth.PrincipalDetails;
import com._hackaton._back.domain.User;
import com._hackaton._back.dto.BusinessConfirmDto;
import com._hackaton._back.service.businessconfirm.BusinessConfirmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BusinessConfirmController {

    @Autowired
    private BusinessConfirmService businessConfirmService;


    /**
     *
     * 사업자 유효성 검사
     * notion 참고
     *
     */
    @RequestMapping(value = "/api/business-confirm", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUser(@RequestBody BusinessConfirmDto data) throws Exception {

        return businessConfirmService.BusinessConfirmApiRequest(data);
    }

    @RequestMapping(value = "/api/hi", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getHi(){
        return "안녕";
    }
}
