package com.utkarsh.taskmanagerbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String greet(){
        return "HELLO WORLD";
    }
}
