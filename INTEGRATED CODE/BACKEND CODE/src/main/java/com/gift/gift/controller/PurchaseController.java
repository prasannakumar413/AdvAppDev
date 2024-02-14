
package com.gift.gift.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.gift.gift.model.PurchaseModel;
import com.gift.gift.service.PurchaseService;

import java.util.List;

@CrossOrigin
@RestController
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @GetMapping("/getp")
    public List<PurchaseModel> getAllPurchases() {
        return purchaseService.getAllPurchases();
    }

    @GetMapping("/getpur/{purchaseId}")
    public PurchaseModel getPurchaseById(@PathVariable("purchaseId") int purchaseId) {
        return purchaseService.getPurchaseById(purchaseId);
    }

    @PostMapping("/addp")
    public String addPurchase(@RequestBody PurchaseModel purchase) {
        return purchaseService.addPurchase(purchase);
    }

    @PutMapping("/updatep")
    public String updatePurchase(@RequestBody PurchaseModel purchase) {
        return purchaseService.updatePurchase(purchase);
    }

    @DeleteMapping("/detelep/{purchaseId}")
    public String deletePurchase(@PathVariable("purchaseId") int purchaseId) {
        return purchaseService.deletePurchase(purchaseId);
    }

}
