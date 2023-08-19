package com._hackaton._back.controller;


import com._hackaton._back.config.auth.PrincipalDetails;
import com._hackaton._back.domain.User;
import com._hackaton._back.dto.BusinessConfirmDto;
import com._hackaton._back.repository.UserRepository;
import com._hackaton._back.service.businessconfirm.BusinessConfirmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
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
    @Transactional
    public String getCurrentUser(@AuthenticationPrincipal PrincipalDetails p, @RequestBody BusinessConfirmDto data) throws Exception {

        String b = businessConfirmService.BusinessConfirmApiRequest(data);
        if(p!=null) {
            User currentUser = userRepository.findByUsername(p.getUsername());

            if (b.equals("01")) {
                    p.getUser().setRole("ROLE_CEO");
                    currentUser.setRole("ROLE_CEO");

            }
        }
        return b;

    }

    @RequestMapping(value = "/api/hi", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getHi(){
        return "안녕";
    }
}
