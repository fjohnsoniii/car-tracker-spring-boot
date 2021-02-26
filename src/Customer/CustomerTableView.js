import React from 'react';

const CustomerTableView = ({customer, id, deleteCustomer}) => {
    return (
        <table className="carsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td><button className="deleteCustomer" onClick={(e) => deleteCustomer(id)}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default CustomerTableView;