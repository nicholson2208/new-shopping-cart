import React from 'react';

import ProductTable from './ProductTable'
import ShoppingCart from './ShoppingCart'
import ShoppingCartDetail from '../ShoppingCartDetail';
import SizeFilter from './SizeFilter';

import './index.scss';


export default class FilterableProductTable extends React.Component {
    render() {
      
      let activeCart = (inCart) => {
        if(this.props.isShoppingCartActive) { 
          return(
            <ShoppingCartDetail 
              inShoppingCart = {this.props.inShoppingCart}
              isShoppingCartActive = {this.props.isShoppingCartActive}
              products = {this.props.products}

              handleRemoveFromCart = {(p,s) => this.props.handleRemoveFromCart(p,s)}
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
          <SizeFilter
            handleToggleFilter = {(s) => this.props.handleToggleFilter(s)}
          />
          <ProductTable 
            products={this.props.products} 
            inShoppingCart = {this.props.inShoppingCart}
            sizesDisplaying = {this.props.sizesDisplaying}
            handleAddToCart = {(p, s) => this.props.handleAddToCart(p, s)}
            
          />
          </div>
        </div>
      );
    }
  }
  