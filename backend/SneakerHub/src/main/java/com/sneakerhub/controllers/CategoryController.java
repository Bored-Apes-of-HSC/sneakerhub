package com.sneakerhub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sneakerhub.model.Category;
import com.sneakerhub.service.ProductJPAService;

@RestController
@RequestMapping("/category")
public class CategoryController {
    
	@Autowired
	private ProductJPAService productService;
	
	@GetMapping("/{category}")
    public List<Category> getSubCategoryByCategory(@PathVariable String category) {
        return productService.findSubCategoryByCategory(category);
    }
}
