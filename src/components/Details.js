import React, { Component } from 'react';
import {ProductConsumer} from "../context"
import {Link} from "react-router-dom"
import Title from './Title';

class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                 const {id, name, img, desc, price, inCart} = value.detailProduct;

                 return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center my-5">
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid"/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <h1>{name}</h1>
                                        <h5>{price} DKK</h5>
                                        <p>{desc}</p>
                                        <Link to="/">
                                            <button>Back to products</button>
                                        </Link>
                                        <button className="cart-button" disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id)
                                        }}>
                                            {inCart?(<p className="text-capitalize mb-0"> incart</p>):(<p>not incart</p>)}
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;