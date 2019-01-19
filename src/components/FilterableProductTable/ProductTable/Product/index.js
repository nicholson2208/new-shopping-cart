import React from 'react';
import './index.scss';

import {Button} from 'react-bootstrap'; 


export default class Product extends React.Component {
    render() {
      const product = this.props.product;
  
      const image_path = require(`../../../../static/data/products/${product.image}`);
      //const size = product.size;
  
      return (
        <div class="product">
          <img 
            height="80"
            width="80" 
            src={image_path}
            alt = {product.name}>
          </img>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <Button
            bsStyle="warning"
            onClick={() => this.props.handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      ); 
    }
  }