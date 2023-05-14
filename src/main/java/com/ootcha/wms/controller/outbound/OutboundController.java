package com.ootcha.wms.controller.outbound;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/outbound")
public class OutboundController {

    @GetMapping("/outbound_req_input")
    public String outbound_req_input(){
        return "/outbound/outbound_req_input";
    }
    @GetMapping("/outbound_req_list")
    public String outbound_req_list(){
        return "/outbound/outbound_req_list";
    }
    @GetMapping("/outbound_req_appr")
    public String outbound_req_appr(){
        return "/outbound/outbound_req_appr";
    }
}
