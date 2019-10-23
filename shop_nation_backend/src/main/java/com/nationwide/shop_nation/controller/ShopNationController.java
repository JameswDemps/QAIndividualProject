package com.nationwide.shop_nation.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nationwide.shop_nation.persistence.entity.BasketItem;
import com.nationwide.shop_nation.service.BasketItemService;

@RestController
@RequestMapping("/shop")
@CrossOrigin(origins="http://localhost:3000", allowedHeaders="*")
public class ShopNationController {
	
	@Autowired
	private BasketItemService basketService;
	
	@GetMapping("/showBasket")
	public ArrayList<BasketItem> showAll() {
		System.out.println("Hello");
		return basketService.showAll();
	}
	
	@PutMapping("/addToBasket/{id}")
	public BasketItem incrementQuantity(@PathVariable Long id) {
		return basketService.incrementQuantity(id);
	}
	
	@DeleteMapping("/removeFromBasket/{id}")
	public BasketItem deleteBasketItem(@PathVariable Long id) {
		return basketService.deleteBasketItem(id);
	}
	
	@PostMapping("/createNewItem/{id}")
	public BasketItem createNewItem(@PathVariable Long id) {
		return basketService.createNewItem(id);
	}
		
}
