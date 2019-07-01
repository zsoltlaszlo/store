import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context"

class Product extends Component {
    render() {

        const {id, name, img, price, desc, inCart} = this.props.product;

        return (
            <div className="col-9 mx auto col-md-6 col-lg-3 mt-3">
                <h1>ITs a product</h1> 
                <div className="card">

                    <ProductConsumer>

                        {(value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
       
                            <Link to="/details">
                                <img src={img} alt="product" className="card-image" />
                            </Link>
                            <div className="card-footer d-flex jostify-content-between">
                                <p className="align-self-center mb-0">{name}</p>
                                <h5 className="text-red mb-0">{price} DKK</h5>
                            </div>
    
                            <button className="cart-button" disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                                {inCart?(<p className="text-capitalize mb-0"> incart</p>):(<p>not incart</p>)}
                            </button>
        
                            </div>
                        )}

                        
                    </ProductConsumer>
                </div>
            </div>
        );
    }
}

export default Product;