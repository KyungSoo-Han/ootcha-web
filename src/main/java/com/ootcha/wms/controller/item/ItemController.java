package com.ootcha.wms.controller.item;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/item")
public class ItemController {
    @GetMapping("/item_iud")
    public String item_iud() {
        return "item/item_iud";
    }

    @GetMapping("/item_list")
    public String item_list() {
        return "item/item_list";
    }
}
