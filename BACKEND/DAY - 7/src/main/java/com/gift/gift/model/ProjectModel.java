package com.gift.gift.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sell_detail")
public class ProjectModel {

    @Id
    private int productId;
    private String productName;
    private String productImage;
    private int productPrice;

    public ProjectModel(int productId, String productName, String productImage, int productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.productImage = productImage;
        this.productPrice = productPrice;
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

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }

    public String toString() {
        return "productId=" + productId + ", productName=" + productName + ", productImage=" + productImage
                + ", productPrice=" + productPrice;
    }

    public ProjectModel() {

    }
}
