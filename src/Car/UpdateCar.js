import React from 'react';
import Axios from 'axios';
import {carsUrl} from '../Utility/Url';
import CarTableView, {default as car} from './CarTableView';

export default class UpdateCar extends React.Component {

    constructor(props) {
        super();
        this.state = {
            id: car.id,
            year: car.year,
            make: car.make,
            model: car.model,
            type: car.carType,
            price: car.price
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(
            carsUrl + car.id,
            this.state
        ).then(resp => console.log(resp.data));
        alert("Car updated!");
    }

    render (){
        return (
            <div className="form-container">
                <h1>Update Car</h1>
                <form className="updateCarForm" onSubmit={this.handleSubmit} action="/cars">
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" className="form-control col-sm-4" placeholder={this.state.year} id="year" name="year" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Make:</label>
                        <input type="text" className="form-control col-sm-4" placeholder={this.state.make} id="make" name="make" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Model:</label>
                        <input type="text" className="form-control col-sm-4" placeholder={this.state.model} id="model" name="model" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <input type="text" className="form-control col-sm-4" placeholder={this.state.carType} id="carType" name="carType" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="text" className="form-control col-sm-4" placeholder={this.state.price} id="price" name="price" onChange={this.handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="record-submit">Submit</button>
                </form>
            </div>
        );
    }
}