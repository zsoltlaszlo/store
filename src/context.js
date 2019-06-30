import React, { Component } from 'react';
import {products, detailProduct} from "./db"

const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products:products,
        detailProduct:detailProduct
    }

    handleDetail = () => {
        console.log("Hello from detail")

    }

    addToCart = () => {
        console.log("Hello from add to cart")
        
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer };
