package com.nationwide.shop_nation.persistence.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nationwide.shop_nation.persistence.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
	public ArrayList<Product> findAll();
	//public Optional<Product> findById(Long long1);
	public ArrayList<Product> findByProductName(String name);
}
