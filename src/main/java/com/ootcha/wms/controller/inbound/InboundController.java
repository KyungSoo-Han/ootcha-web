package com.ootcha.wms.controller.inbound;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/inbound")
public class InboundController {

    @GetMapping("/inbound_req_input")
    public String inbound_req_input() {
        return "/inbound/inbound_req_input";
    }
    @GetMapping("/inbound_req_list")
    public String inbound_req_list() {
        return "/inbound/inbound_req_list";
    }
    @GetMapping("/inbound_req_appr")
    public String inbound_req_appr() {
        return "/inbound/inbound_req_appr";
    }
    @GetMapping("/inbound")
    public String inbound() {
        return "/inbound/inbound";
    }
    @GetMapping("/inbound_cancel")
    public String inbound_cancel() {
        return "/inbound/inbound_cancel";
    }
    @GetMapping("/inbound_inspect")
    public String inbound_inspect() {
        return "/inbound/inbound_inspect";
    }
    @GetMapping("/inbound_inspect_cancel")
    public String inbound_inspect_cancel() {
        return "/inbound/inbound_inspect_cancel";
    }
    @GetMapping("/inbound_pileup")
    public String inbound_pileup() {
        return "/inbound/inbound_pileup";
    }
    @GetMapping("/inbound_pileup_cancel")
    public String inbound_pileup_cancel() {
        return "/inbound/inbound_pileup_cancel";
    }
    @GetMapping("/inbound_confirm")
    public String inbound_confirm() {
        return "/inbound/inbound_confirm";
    }

}
