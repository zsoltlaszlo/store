import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/shoppingcart" className="ml-auto">
                    <button>
                        <span>Shopping Cart</span>
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;