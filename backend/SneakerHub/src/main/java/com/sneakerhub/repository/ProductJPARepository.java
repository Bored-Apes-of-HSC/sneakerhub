package com.sneakerhub.repository;

import com.sneakerhub.model.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductJPARepository extends JpaRepository<Product, Integer> {

	List<Product> findProductByCategory(int cid);
//    List<Product> findByCategory(int categoryId);

}