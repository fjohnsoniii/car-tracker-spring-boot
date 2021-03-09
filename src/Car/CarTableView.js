import React from 'react';
import UpdateCar from './UpdateCar';

const CarTableView = ({car, id, deleteCar, updateCar}) => {

    return (
        <tr>
            <td>{car.id}</td>
            <td>{car.year}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.carType}</td>
            <td>${car.price.toFixed(2)}</td>
            <td><button type="button" className="btn btn-danger" onClick={(e) => {if (window.confirm("Are you sure you want to delete this item?")) deleteCar(id)}}>Delete</button></td>
            {/* <td><button type="button" className="btn btn-warning" onClick={updateCar}>Edit</button></td> */}
        </tr>
    );
}

export default CarTableView;
