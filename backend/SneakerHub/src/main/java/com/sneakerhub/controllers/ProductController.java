package com.sneakerhub.controllers;

import com.sneakerhub.model.Category;
import com.sneakerhub.model.Product;
import com.sneakerhub.service.ProductJPAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
    private ProductJPAService productService;


    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable int category) {
        return productService.findProductByCategory(category);
    }
}
