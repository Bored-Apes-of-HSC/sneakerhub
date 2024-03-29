package com.sneakerhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sneakerhub.model.Category;

@Repository
public interface CategoryJPARepository extends JpaRepository<Category, Integer> {
	
//	@Query("SELECT c.subCategory FROM Category c WHERE c.category = :category")
//    List<String> findSubCategoryByCategory(String category);
	List<Category> findSubCategoryByCategory(String category);
}
