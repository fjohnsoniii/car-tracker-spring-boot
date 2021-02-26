package com.revature.cars.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cars.model.Customer;
import com.revature.cars.repo.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	CustomerRepo custRepo;
	
	public Customer addCustomer(Customer customer) {
		return custRepo.save(customer);
	}
	
	public List<Customer> getAllCustomers() {
		return custRepo.findAll();
	}
	
	public Customer getCustomerById(int id) {
		return custRepo.findById(id);
	}
	
	public void deleteCustomer(int id) {
		custRepo.deleteById(id);
	}
}
