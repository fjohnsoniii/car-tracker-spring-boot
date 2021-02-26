import React from 'react';

const CarTableView = ({car, id, deleteCar}) => {
    return (
        <table className="carsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{car.id}</td>
                    <td>{car.year}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.carType}</td>
                    <td>{car.price}</td>
                    <td>{car.sold}</td>
                    <td><button className="deleteCar" onClick={(e) => deleteCar(id)}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default CarTableView;
