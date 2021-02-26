import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { carsUrl } from '../Utility/Url';
import CarTableView from './CarTableView';

const CarContainer = () => {

    const [cars, setCars] = useState([]); //default state set to empty array

    const getAllCars = async () => {
        const resp = await Axios.get( //retrieve list of cars from server
            carsUrl
        )
        setCars(resp.data); //set state (empty array) to response from server
        console.log(resp);
    }

    const deleteCar = async (id) => {
        const resp = await Axios.delete(
            carsUrl + id
        )
        console.log(resp);
        if (resp.status === 200) {
            getAllCars();
        }
    }

    useEffect(() => {
        getAllCars();
    }, [])

    return (
        <div className="carsListContainer">
            {cars.map(car => (
                <CarTableView car={car} key={car.id} id={car.id} deleteCar={deleteCar}/>
            ))} 
        </div>
    );
}

export default CarContainer;
