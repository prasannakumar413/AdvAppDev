package com.gift.gift.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.gift.gift.model.PurchaseModel;
import com.gift.gift.service.PurchaseService;

@CrossOrigin
@RestController
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @GetMapping("/getpd")
    public List<PurchaseModel> fetchDetails() {
        return purchaseService.getDetails();
    }

    @PostMapping("/addpd")
    public String addId(@RequestBody PurchaseModel purchase) {
        purchaseService.add(purchase);
        return "Added " + purchase.getpurchaseId();
    }

    @PutMapping("/updatepd")
    public PurchaseModel updateInfo(@RequestBody PurchaseModel purchase1) {
        return purchaseService.updateDetails(purchase1);
    }

    @DeleteMapping("/deletepd/{purchaseId}")
    public String deleteInfo(@PathVariable("purchaseId") int purchaseId) {
        purchaseService.deleteDetails(purchaseId);
        return "Details deleted successfully";
    }
}
