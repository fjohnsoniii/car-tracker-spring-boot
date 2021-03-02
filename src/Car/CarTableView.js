import React from 'react';

const CarTableView = ({car, id, deleteCar}) => {
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{car.id}</td>
                    <td>{car.year}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.carType}</td>
                    <td>${car.price.toFixed(2)}</td>
                    <td><button type="button" className="btn btn-danger" onClick={(e) => {if (window.confirm("Are you sure you want to delete this item?")) deleteCar(id)}}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default CarTableView;
