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
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;
    const size = product.size;
    const image_path = require(`./static/data/products/${product.image}`);

    return (
      <tr>
        <td><img height="42" width="42" src={image_path}></img><p>{name}</p></td>
        <td>{product.price}</td>
        <td>{product.size}</td>
        <td><div className="add_button">Add to Cart</div> </td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
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


// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
 



export default FilterableProductTable;
