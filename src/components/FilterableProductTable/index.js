import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductTable from './ProductTable'
import ShoppingCart from './ShoppingCart'

import './index.scss';


export default class FilterableProductTable extends React.Component {
    render() {
      return (
        <div>
          <ShoppingCart />
          
          <div className="ProductTable">
          <ProductTable products={this.props.products} />
          </div>
        </div>
      );
    }
  }
  