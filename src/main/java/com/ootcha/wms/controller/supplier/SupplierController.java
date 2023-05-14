package com.ootcha.wms.controller.supplier;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/supplier")
public class SupplierController {
    @GetMapping("/supplier_iud")
    public String supplier_iud() {
        return "supplier/supplier_iud";
    }

    @GetMapping("/supplier_list")
    public String supplier_list() {
        return "supplier/supplier_list";
    }
}
