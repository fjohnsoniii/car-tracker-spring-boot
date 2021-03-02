import React from 'react';
import Axios from 'axios';
import { customerUrl } from '../Utility/Url';

export default class AddCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        Axios.post(
            customerUrl,
            this.state
        ).then(resp => console.log(resp.data));
        alert("Customer added!");
    }

    render() {
        return (
            <div className="form-container">
                <h1>Add Customer</h1>
                <form className="customerForm" onSubmit={this.handleSubmit} action="/customers">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="John" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control col-sm-4" placeholder="Doe" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control col-sm-4" placeholder="example@email.com" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="record-submit">Submit</button>
                </form>
            </div>
        );
    }
}
