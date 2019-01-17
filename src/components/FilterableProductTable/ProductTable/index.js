import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';
import './index.scss';


export default class ProductTable extends React.Component {
    render() {
      const rows = [];    
      this.props.products.forEach((product) => {
        rows.push(
          <Product
            product={product}
            key={product.name} />
        );
      });
  
      return (
        <div id="holder">{rows}</div>
      );
    }
  }