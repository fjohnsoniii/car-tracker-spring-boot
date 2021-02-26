package com.revature.cars.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.cars.model.Car;

@Repository
public interface CarRepo extends JpaRepository<Car, Integer>{

	public Car save(Car car);
	
	public Car findById(int id);
	
	public List<Car> findAll();
	
	public void deleteById(int id);
	
}
