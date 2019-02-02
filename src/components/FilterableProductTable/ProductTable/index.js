import React from 'react';

import Product from './Product';
import './index.scss';


export default class ProductTable extends React.Component {
  constructor() {
  super();
  

  }


    render() {

      const rows = [];    
      this.props.products.forEach((product) => {
        rows.push(
          <Product
            product={product}
            handleAddToCart = {(p) => this.props.handleAddToCart(p)}
            key={product.name} />
        );
      });
  
      return (
        <div id="holder">{rows}</div>
      );
    }
  }