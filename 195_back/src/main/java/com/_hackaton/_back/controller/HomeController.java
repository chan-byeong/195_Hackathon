package com._hackaton._back.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class HomeController {
    @GetMapping("/createForm")
    public String createFormPage() {
        // createForm 페이지로 이동
        return "createForm"; // 뷰의 이름 (템플릿 파일의 이름)
    }

    @GetMapping("/filterForm")
    public String filterFormPage() {
        // createForm 페이지로 이동
        return "filterForm"; // 뷰의 이름 (템플릿 파일의 이름)
    }
}