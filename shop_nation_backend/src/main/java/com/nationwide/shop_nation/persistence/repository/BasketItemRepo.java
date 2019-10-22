package com.nationwide.shop_nation.persistence.repository;

import com.nationwide.shop_nation.persistence.entity.BasketItem;
import com.nationwide.shop_nation.persistence.entity.Product;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketItemRepo extends JpaRepository <BasketItem, Long> {
	public ArrayList<BasketItem> findAll();
	public BasketItem findByProduct(Optional<Product> item);
	//public BasketItem findById(Long long1);
	//public BasketItem incrementQuantity(Long Id);
}
