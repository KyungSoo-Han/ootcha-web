package com.ootcha.wms.controller.center;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/center")
public class CenterController {
    @GetMapping("/center_iud")
    public String center_iud() { return "center/center_iud";}

    @GetMapping("/center_list")
    public String center_list() { return "center/center_list";}
}
