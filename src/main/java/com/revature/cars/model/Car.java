package com.revature.cars.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Cars")
public class Car {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private int id;
	
	@Column
	@NotNull
	private int year;
	
	@Column
	@NotNull
	private String make;
	
	@Column
	@NotNull
	private String model;
	
	@Column (name = "car_type")
	@NotNull
	private String carType;
	
	@Column
	@NotNull
	private double price;
	
//	@Column
//	@NotNull
//	private boolean sold;
}
