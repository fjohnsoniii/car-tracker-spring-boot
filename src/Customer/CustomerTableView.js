import React from 'react';

const CustomerTableView = ({customer, id, deleteCustomer}) => {
    return (
        <tr>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td><button type="button" className="btn btn-danger" onClick={(e) => {if (window.confirm("Are you sure you want to delete this item?")) deleteCustomer(id)}}>Delete</button></td>
        </tr>
    );
}

export default CustomerTableView;