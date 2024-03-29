package com.sneakerhub.service;

import com.sneakerhub.model.Category;
import com.sneakerhub.model.Product;
import com.sneakerhub.repository.CategoryJPARepository;
import com.sneakerhub.repository.ProductJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductJPAService {
	
	@Autowired
    private ProductJPARepository productRepository;

   @Autowired
    private CategoryJPARepository categoryRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }
    public List<Product> findProductByCategory(int cid) {
    	return productRepository.findProductByCategory(cid);
    }
//    public List<Product> findByCategory(int categoryId) {
//        return productRepository.findByCategory(categoryId);
//    }
//    
    public List<Category> findSubCategoryByCategory(String category) {
    	return categoryRepository.findSubCategoryByCategory(category);
    }
}
