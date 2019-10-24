package com.nationwide.shop_nation.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nationwide.shop_nation.persistence.entity.Product;
import com.nationwide.shop_nation.persistence.repository.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo productRepo;

	public ArrayList<Product> showAll() {
		return productRepo.findAll();
	}
	
}
