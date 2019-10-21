package com.nationwide.shop_nation.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
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
public class ShopNationController {
	
	@Autowired
	private BasketItemService basketService;
	
	@GetMapping("/showBasket")
	public ArrayList<BasketItem> showAll() {
		System.out.println("Hello");
		return basketService.showAll();
	}
	
	@GetMapping("/addToBasket/{Id}")
	public BasketItem incrementQuantity(@PathVariable Long Id) {
		System.out.println("incrementQuantity");
		System.out.println(Id);
		BasketItem basketItem = basketService.showId(Id);
		return basketService.incrementQuantity(basketItem);
	}
		
}
