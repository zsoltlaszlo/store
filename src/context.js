import React, { Component } from 'react';
import {products, detailProduct} from "./db"

const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {

    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[]
    }

    componentDidMount() {
        this.setProduct();
    }

    //copy the products from db.js
    setProduct = () => {
        let tempProducts = [];
        products.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(() => {
            return {products:tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }


    handleDetail = (id) => {
        console.log("Hello from detail")
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    }

    addToCart = (id) => {
       let tempProducts = [...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;

       this.setState(() => {
           return {products: tempProducts, cart:[...this.state.cart, product]}
       },() => {console.log(this.state)})
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
