package com._hackaton._back.controller;


import com._hackaton._back.config.auth.PrincipalDetails;
import com._hackaton._back.domain.User;
import com._hackaton._back.dto.BusinessConfirmDto;
import com._hackaton._back.repository.UserRepository;
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

    @Autowired
    private UserRepository userRepository;


    /**
     *
     * 사업자 유효성 검사
     * notion 참고
     *
     */
    @RequestMapping(value = "/api/business-confirm", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public String businessConfirm(@RequestBody BusinessConfirmDto data) throws Exception {

        return businessConfirmService.BusinessConfirmApiRequest(data);
    }

    @RequestMapping(value = "/api/business-confirm-CEO", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public void businessConfirmOk(@AuthenticationPrincipal PrincipalDetails principalDetails) {


        userRepository.findByUsername(principalDetails.getUsername()).setRole("ROLE_CEO");


    }
    @RequestMapping(value = "/api/business-confirm-COMMON", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public void businessConfirmCommon(@AuthenticationPrincipal PrincipalDetails principalDetails) {


        userRepository.findByUsername(principalDetails.getUsername()).setRole("ROLE_COMMON");

    }


}