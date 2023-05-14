package com.ootcha.wms.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @GetMapping("/loginForm")
    public String loginForm(){
        return "/user/login";
    }
    @GetMapping("/signup")
    public String signupForm(){
        return "/user/signup";
    }
}
