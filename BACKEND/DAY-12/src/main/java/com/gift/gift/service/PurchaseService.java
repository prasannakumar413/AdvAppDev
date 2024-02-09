package com.gift.gift.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.gift.repository.PurchaseRepository;
import com.gift.gift.model.PurchaseModel;

@Service
public class PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    @SuppressWarnings("null")
    public String add(PurchaseModel purchase) {
        purchaseRepository.save(purchase);
        return "Added " + purchase.getpurchaseId();
    }

    public List<PurchaseModel> getDetails() {
        return purchaseRepository.findAll();
    }

    @SuppressWarnings("null")
    public PurchaseModel updateDetails(PurchaseModel purchase) {
        return purchaseRepository.saveAndFlush(purchase);
    }

    public void deleteDetails(int purchaseId) {
        purchaseRepository.deleteById(purchaseId);
    }
}
