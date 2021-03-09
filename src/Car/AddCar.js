import React from 'react';
import {carsUrl} from '../Utility/Url';
import Axios from 'axios';

export default class AddCar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            carType: "",
            price: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        Axios.post(
            carsUrl,
            this.state
        ).then(resp => console.log(resp.data));
        alert("Car added!");
    }

    render() {
        return (
            <div className="form-container">
                <h1>Add Car</h1>
                <form className="carForm" onSubmit={this.handleSubmit} action="/cars">
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="1997" id="year" name="year" value={this.state.year} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Make:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="Toyota" id="make" name="make" value={this.state.make} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Model:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="Corolla" id="model" name="model" value={this.state.model} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="Sedan" id="carType" name="carType" value={this.state.carType} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="2000" id="price" name="price" value={this.state.price} onChange={this.handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="record-submit">Submit</button>
                </form>
            </div>
        );
    }
}