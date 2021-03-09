import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { customerUrl } from '../Utility/Url';
import CustomerTableView from './CustomerTableView';

const CustomerContainer = () => {

    const [customers, setCustomers] = useState([]); //default state set to empty array

    const getAllCustomers = async () => {
        const resp = await Axios.get( //retrieve list of customers from server
            customerUrl
        )
        setCustomers(resp.data); //set state (empty array) to response from server
        console.log(resp);
    }

    const deleteCustomer = async (id) => {
        const resp = await Axios.delete(
            customerUrl + id
        )
        console.log(resp);
        if (resp.status === 200) {
            getAllCustomers();
        }
    }

    useEffect(() => {
        getAllCustomers();
    }, [])

    return (
        <div className="customersListContainer">
            <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => (
                    <CustomerTableView customer={customer} key={customer.id} id={customer.id} deleteCustomer={deleteCustomer}/>
                ))}
            </tbody>
            </table>
             
        </div>
    );
}

export default CustomerContainer;