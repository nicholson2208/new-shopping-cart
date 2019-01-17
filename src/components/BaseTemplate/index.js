import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterableProductTable from '../FilterableProductTable';


export default class BaseTemplate extends Component {
    render() {
      return (
          <FilterableProductTable products={this.props.products}/>
      );
    }
  }