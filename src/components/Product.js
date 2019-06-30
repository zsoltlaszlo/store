import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context"

class Product extends Component {
    render() {

        const {id, title, img, price, desc, inCart} = this.props.product;

        return (
            <div className="col-9 mx auto col-md-6 col-lg-3 mt-3">
                <h1>ITs a product</h1> 
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log("image was clicked")}>

                    
                    <Link to="/details">
                        <img src={img} alt="product" className="card-image" />
                    </Link>
                    <button className="cart-button" disabled={inCart ? true : false} onClick={() => console.log("added to the shopping cart")}></button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Product;