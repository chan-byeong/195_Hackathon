package com._hackaton._back.controller;


import com._hackaton._back.domain.User;
import com._hackaton._back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class IndexController_test {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

//    @GetMapping({"","/"})
//    public String index(){
//        return "Index";
//    }



//    @RequestMapping(value = "/**/{path:[^\\.]*}")
//    public String redirect() {
//        // 모든 경로를 index.html로 포워딩
//        return "forward:/index.html";
//    }






}
