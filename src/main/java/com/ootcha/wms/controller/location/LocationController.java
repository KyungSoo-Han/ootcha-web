package com.ootcha.wms.controller.location;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/location")
public class LocationController {
    @GetMapping("/location_list")
    public String location_list() { return "location/location_list";}
}
