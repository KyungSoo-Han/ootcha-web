package com.ootcha.wms.controller.destination;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/destination")
public class DestinationController {
    @GetMapping("/destination_iud")
    public String destination_iud() {
        return "destination/destination_iud";
    }

    @GetMapping("/destination_list")
    public String destination_list() {
        return "destination/destination_list";
    }
}
