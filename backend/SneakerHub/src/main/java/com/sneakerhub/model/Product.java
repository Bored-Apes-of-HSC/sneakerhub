package com.sneakerhub.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    @Column(name="pid")
    int pid;
    
    @Column(name="title")
    String title;
    
    @Column(name="description")
    String description;
    
    @Column(name="sale_price")
    int salePrice;
    
    @Column(name="price")
    int price;
    
    @Column(name="quantity")
    int quantity;
    
    @Column(name="image")
    String image;
    
    @Column(name="category")
    int category;

    // Constructors
    public Product() {
    }

    public Product(int pid, String title, String description, int salePrice, int price, int quantity, String image, int category) {
        this.pid = pid;
        this.title = title;
        this.description = description;
        this.salePrice = salePrice;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.category = category;
    }

    // Getters and Setters
    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(int salePrice) {
        this.salePrice = salePrice;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }
}
