package com.nationwide.shop_nation.persistence.repository;

import com.nationwide.shop_nation.persistence.entity.BasketItem;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketItemRepo extends JpaRepository <BasketItem, Long> {
	public ArrayList<BasketItem> findAll();
	//public BasketItem findById(Long long1);
}
