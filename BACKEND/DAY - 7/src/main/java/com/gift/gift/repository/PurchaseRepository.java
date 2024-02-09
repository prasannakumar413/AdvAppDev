package com.gift.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gift.gift.model.PurchaseModel;

@Repository
public interface PurchaseRepository extends JpaRepository<PurchaseModel, Integer> {

}
