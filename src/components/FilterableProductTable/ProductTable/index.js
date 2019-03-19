import React from 'react';

import Product from './Product';
import './index.scss';


export default class ProductTable extends React.Component {
    render() {

      const rows = [];    
      this.props.products.forEach((product) => {
        rows.push(
          <Product
            product={product}
            inShoppingCart = {this.props.inShoppingCart}
            handleAddToCart = {(p, s) => this.props.handleAddToCart(p, s)}
            key={product.name} />
        );
      });
  
      return (
        <div id="holder">{rows}</div>
      );
    }
  }