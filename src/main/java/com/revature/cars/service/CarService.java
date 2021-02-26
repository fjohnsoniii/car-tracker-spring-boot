package com.revature.cars.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cars.model.Car;
import com.revature.cars.repo.CarRepo;

@Service
public class CarService {

	@Autowired
	CarRepo carRepo;
	
	public Car addCar(Car car) {
		return carRepo.save(car);
	};
	
	public Car getCarById(int id) {
		return carRepo.findById(id);
	};
	
	public List<Car> getAllCars() {
		return carRepo.findAll();
	};
	
	public Car editCar(Car car, int id) {
		Car updatedCar = carRepo.findById(id);
		updatedCar.setYear(car.getYear());
		updatedCar.setMake(car.getMake());
		updatedCar.setModel(car.getModel());
		updatedCar.setCarType(car.getCarType());
		updatedCar.setPrice(car.getPrice());
		updatedCar.setSold(car.isSold());
		return updatedCar;
	}
	
	public void deleteCar(int id) {
		carRepo.deleteById(id);
	};
}
