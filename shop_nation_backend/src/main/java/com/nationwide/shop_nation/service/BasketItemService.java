package com.nationwide.shop_nation.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.nationwide.shop_nation.persistence.entity.BasketItem;
import com.nationwide.shop_nation.persistence.repository.BasketItemRepo;



@Service
public class BasketItemService {
	@Autowired
	private BasketItemRepo repo;
	
	
	public ArrayList<BasketItem> showAll() {
		return repo.findAll();
	}
	
	public BasketItem  showId(@PathVariable Long id) {
		Optional<BasketItem> opt = repo.findById(id);
		if(opt.isPresent()) {
			//return opt;
			return opt.get();
			
		}
		return null;

	}
	
	public BasketItem incrementQuantity(@PathVariable BasketItem basketItem) {
		
		Optional<BasketItem> item = repo.findById(1L);
		if(item.isPresent()) {
			BasketItem b = new BasketItem();
			b.setQuantity(3);
			repo.save(b);
		}
		
		
		return new BasketItem();
		
//		BasketItem fromDatabase;
//		
//		Optional<BasketItem> opt = repo.findById(basketItem.getId());
//		if(opt.isPresent()) {
//			fromDatabase = opt.get();
//		}
//		else {
//			fromDatabase = null;
//		}
//		
//		
//		
//		//BasketItem fromDatabase = repo.findByProduct(basketItem.getProduct().getId());
//		//BasketItem fromDatabase = showId(id);
//		//System.out.println(id);
//		//System.out.println(fromDatabase.getQuantity());
//		fromDatabase.setQuantity(basketItem.getQuantity()+1);
//		System.out.println(fromDatabase.getQuantity());
//		return fromDatabase;
	}
	
	public BasketItem decrementQuantity(@PathVariable Long id) {
		BasketItem fromDatabase = showId(id);
		int quantity = fromDatabase.getQuantity();
		if (quantity == 0) {
			return deleteBasketItem(id);
		}
		else {
			fromDatabase.setQuantity(fromDatabase.getQuantity()-1);			
		}
		return fromDatabase;
	}
	
	public BasketItem deleteBasketItem(Long id) {
		BasketItem fromDatabase = showId(id);
		repo.delete(fromDatabase);
		return fromDatabase;
	}
}
