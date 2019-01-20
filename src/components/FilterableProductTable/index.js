import React from 'react';

import ProductTable from './ProductTable'
import ShoppingCart from './ShoppingCart'
import ShoppingCartDetail from '../ShoppingCartDetail';

import './index.scss';


export default class FilterableProductTable extends React.Component {
    render() {
      
      let activeCart = (inCart) => {
        if(this.props.isShoppingCartActive) { 
          return(
            <ShoppingCartDetail 
              inShoppingCart = {inCart}
              isShoppingCartActive = {this.props.isShoppingCartActive}
              handleRemoveFromCart = {(p) => this.props.handleRemoveFromCart(p)}
            />
          );
        
        } else {
          return (<div></div>);
        }
      };

      return (
        <div>
          {activeCart(this.props.inShoppingCart)}
          <ShoppingCart
            handleToggleCart = {() => this.props.handleToggleCart()}
          />
          <div className="ProductTable">
          <ProductTable 
            products={this.props.products} 
            handleAddToCart = {(p) => this.props.handleAddToCart(p)}
            
          />
          </div>
        </div>
      );
    }
  }
  