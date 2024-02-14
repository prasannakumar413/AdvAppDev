package com.gift.gift.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.gift.repository.PurchaseRepository;
import com.gift.gift.model.PurchaseModel;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    public String addPurchase(PurchaseModel purchase) {
        purchaseRepository.save(purchase);
        return "Purchase added successfully with ID: " + purchase.getPurchaseId();
    }

    public List<PurchaseModel> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    public PurchaseModel getPurchaseById(int purchaseId) {
        Optional<PurchaseModel> optionalPurchase = purchaseRepository.findById(purchaseId);
        return optionalPurchase.orElse(null);
    }

    public String updatePurchase(PurchaseModel purchase) {
        if (purchaseRepository.existsById(purchase.getPurchaseId())) {
            purchaseRepository.save(purchase);
            return "Purchase updated successfully";
        } else {
            return "Purchase with ID " + purchase.getPurchaseId() + " does not exist";
        }
    }

    public String deletePurchase(int purchaseId) {
        if (purchaseRepository.existsById(purchaseId)) {
            purchaseRepository.deleteById(purchaseId);
            return "Purchase with ID " + purchaseId + " deleted successfully";
        } else {
            return "Purchase with ID " + purchaseId + " does not exist";
        }
    }

}
