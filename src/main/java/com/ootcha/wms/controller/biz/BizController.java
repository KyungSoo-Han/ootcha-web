package com.ootcha.wms.controller.biz;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/biz")
public class BizController {
    @GetMapping("/biz_iud")
    public String biz_iud() { return "biz/biz_iud";}

    @GetMapping("/biz_list")
    public String biz_list() { return "biz/biz_list";}
}
