package com.sneakerhub.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Category {
    @Id
    @Column(name="cid")
    private int cid;
    
    @Column(name="category")
    private String category;
    
    @Column(name="sub_category")
    private String subCategory;

    // Constructors
    public Category() {
    }

    public Category(int cid, String category, String subCategory) {
        this.cid = cid;
        this.category = category;
        this.subCategory = subCategory;
    }

    // Getters and Setters
    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }
}
