package com.nationwide.shop_nation.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.nationwide.shop_nation.persistence.entity.BasketItem;
import com.nationwide.shop_nation.persistence.entity.Product;
import com.nationwide.shop_nation.persistence.repository.BasketItemRepo;
import com.nationwide.shop_nation.persistence.repository.ProductRepo;



@Service
public class BasketItemService {
	@Autowired
	private BasketItemRepo basketItemRepo;
	
	@Autowired
	private ProductRepo productRepo;
	
	public ArrayList<BasketItem> showAll() {
		return basketItemRepo.findAll();
	}
	
	public BasketItem  showId(@PathVariable Long id) {
		Optional<BasketItem> opt = basketItemRepo.findById(id);
		if(opt.isPresent()) {
			//return opt;
			return opt.get();
			
		}
		return null;

	}
	
	public BasketItem incrementQuantity(@PathVariable Long id) {
		
		Optional<Product> item = productRepo.findById(id);
		BasketItem fromDatabase = basketItemRepo.findByProduct(item);
		fromDatabase.setQuantity(fromDatabase.getQuantity() + 1);
		fromDatabase.setProduct(item.get());
		basketItemRepo.save(fromDatabase);
		return fromDatabase;
	}
	
	public BasketItem deleteBasketItem(Long id) {
		BasketItem fromDatabase = showId(id);
		basketItemRepo.delete(fromDatabase);
		return fromDatabase;
	}

	public BasketItem createNewItem(Long id) {
		Optional<Product> item = productRepo.findById(id);
		BasketItem fromDatabase = new BasketItem();
		fromDatabase.setId(null);
		fromDatabase.setQuantity(1);
		fromDatabase.setProduct(item.get());
		basketItemRepo.save(fromDatabase);
		return fromDatabase;
	}
}
