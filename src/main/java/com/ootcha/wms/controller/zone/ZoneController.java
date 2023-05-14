package com.ootcha.wms.controller.zone;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/zone")
public class ZoneController {
    @GetMapping("/zone_list")
    public String zone_list() { return "zone/zone_list";}
}
