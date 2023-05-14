package com.ootcha.wms.controller.customer;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class CustomerController {
    @GetMapping("/customer_iud")
    public String customer_iud() { return "customer/customer_iud";}

    @GetMapping("/customer_list")
    public String customer_list() { return "customer/customer_list";}
}
