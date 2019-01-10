import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="4">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
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

class Product extends React.Component {
  render() {
    const product = this.props.product;

    const image_path = require(`./static/data/products/${product.image}`);
    const size = product.size;

    return (
      <div class="product">

      <img height="80" width="80" src={image_path}></img>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
      </div>


    );

  }
}

class ProductTable extends React.Component {
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


      // <table>
      //   <thead>
      //     <tr>
      //       <th>Name</th>
      //       <th>Price</th>
      //       <th>Size</th>
      //       <th> </th>
      //     </tr>
      //   </thead>
      //   <tbody>{rows}</tbody>
      // </table>
    );
  }
}

class ShoppingCart extends React.Component {
  render() {
    return (
      <div class="cart"><p>Shopping Cart is here</p></div>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCart />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
