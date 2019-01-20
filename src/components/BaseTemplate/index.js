import React, { Component } from 'react';

import FilterableProductTable from '../FilterableProductTable';


export default class BaseTemplate extends Component {
    constructor(){
      super();
      this.state = {
        "inShoppingCart" : [],
       "isShoppingCartActive": false
        };
      this.handleAddToCart = this.handleAddToCart.bind(this);
      this.handleToggleCart = this.handleToggleCart.bind(this);
      this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);

    }

    makeId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (let i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      return text;
    }

    handleRemoveFromCart(product){
      console.log("oh boy, I removed something");
      console.log(product.id);
      let newProductList = this.state.inShoppingCart;

      newProductList.forEach((x) =>{
        console.log(x.id)
      });
      
      newProductList = newProductList.filter((item)=> {return(item.id !== product.id)});

      this.setState({"inShoppingCart": newProductList});
    }

    handleAddToCart(product){      
      product["id"] = this.makeId();
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
            handleAddToCart = {(p) => this.handleAddToCart(p)}
            handleRemoveFromCart = {(p) => this.handleRemoveFromCart(p)} 
            handleToggleCart = {() => this.handleToggleCart()}
          />
      );
    }
  }