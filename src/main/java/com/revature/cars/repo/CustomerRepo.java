package com.revature.cars.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.cars.model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {

	public Customer save(Customer customer);
	
	public Customer findById(int id);
	
	public List<Customer> findAll();
	
	public void deleteById(int id);
	
}
