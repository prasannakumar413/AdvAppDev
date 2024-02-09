package com.gift.gift.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "purchase_detail")
public class PurchaseModel {

    @Id
    private int purchaseId;
    private int productId;
    private String productName;
    private int productPrice;
    private int mobileNumber;

    public PurchaseModel(int purchaseId, int productId, String productName, int productPrice, int mobileNumber) {
        this.purchaseId = purchaseId;
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.mobileNumber = mobileNumber;
    }

    public int getpurchaseId() {
        return purchaseId;
    }

    public void setpurchaseId(int purchaseId) {
        this.purchaseId = purchaseId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }

    public int getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(int mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "purchaseId=" + purchaseId + "productId=" + productId + ", productName=" + productName
                + ", productPrice=" + productPrice
                + ", mobileNumber=" + mobileNumber;
    }

    public PurchaseModel() {

    }
}
