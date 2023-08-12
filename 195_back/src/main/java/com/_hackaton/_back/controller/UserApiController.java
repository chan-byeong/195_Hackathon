package com._hackaton._back.controller;

import com._hackaton._back.config.auth.PrincipalDetails;
import com._hackaton._back.domain.User;
import com._hackaton._back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserApiController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HttpSession httpSession;


    /*
    *
    * 현재 유저 데이터 반환
    *
     */
    @RequestMapping(value = "/api/loginInfo", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public User getCurrentUser(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser();
    }

    @RequestMapping(value = "/api/loginInfo/name", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUserName(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser().getUserDetailName();
    }
    @RequestMapping(value = "/api/loginInfo/local", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUserLocal(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser().getLocale();
    }

    @RequestMapping(value = "/api/loginInfo/role", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUserRole(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser().getRole();
    }

    @RequestMapping(value = "/api/loginInfo/email", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUserEmail(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser().getEmail();
    }

    @RequestMapping(value = "/api/loginInfo/date", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String getCurrentUserCreateDate(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return principalDetails.getUser().getCreateDate().toString();
    }


    /*
    *
    * 모든 유저 데이터 반환
    *
     */
    @RequestMapping(value = "/api/users", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<User> getUsers(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return userRepository.findAll();
    }

}
