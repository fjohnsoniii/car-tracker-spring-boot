package com.revature.cars.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.cars.model.Car;
import com.revature.cars.service.CarService;

@CrossOrigin
@RestController
@RequestMapping("/car")
public class CarController {

	@Autowired
	CarService carService;
	
	@PostMapping("/")
	public Car addCar(@RequestBody Car car) {
		return carService.addCar(car);
	}
	
	@GetMapping("/")
	public List<Car> getAllCars() {
		return carService.getAllCars();
	}
	
	@GetMapping("/{id}")
	public Car getCarById(@PathVariable("id") int id) {
		return carService.getCarById(id);
	}
	
	@PutMapping("/{id}")
	public Car editCar(@RequestBody Car car, @PathVariable("id") int id) {
		return carService.editCar(car, id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteCar(@PathVariable("id") int id) {
		carService.deleteCar(id);
	}
}
