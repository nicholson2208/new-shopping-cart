import React, { Component } from 'react';

import FilterableProductTable from '../FilterableProductTable';


export default class BaseTemplate extends Component {
    constructor(){
      super();
      this.state = {
        "inShoppingCart" : [{"name":"cat"}],
       "isShoppingCartActive": false
        };
      this.handleAddToCart = this.handleAddToCart.bind(this);
      this.handleToggleCart = this.handleToggleCart.bind(this);
    }

    handleAddToCart(product){
      console.log(product);

      let newProductList = this.state.inShoppingCart;
      newProductList.push(product);
      
      this.setState({"inShoppingCart": newProductList});

    }

    handleToggleCart() {
      const toggled = !this.state.isShoppingCartActive;

      console.log("you clicked on the shopping cart");
      this.setState({"isShoppingCartActive": toggled});

    }

    render() {
      return (
          <FilterableProductTable 
            products={this.props.products} 
            isShoppingCartActive = {this.state.isShoppingCartActive}
            inShoppingCart = {this.state.inShoppingCart}
            handleAddToCart={(p) => this.handleAddToCart(p)}
            handleToggleCart = {() => this.handleToggleCart()}
          />
      );
    }
  }