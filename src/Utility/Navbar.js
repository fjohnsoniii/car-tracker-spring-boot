import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm fixed-top">
                <div className="navContainer">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink exact to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/cars'>Cars</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/customers'>Customers</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/add-car'>Add Car</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/add-customer'>Add Customer</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
