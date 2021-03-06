import React from 'react';
import './index.scss';

import {Button} from 'react-bootstrap'; 


export default class Product extends React.Component {


    render() {
      const product = this.props.product;
      const inCart = this.props.inShoppingCart;
  
      const image_path = require(`../../../../static/data/products/${product.image}`);
      //const size = product.size;

      let size_buttons = [];
      for(let size in product["numberAvailable"]){
        let addIt = true;
        if (product["sku"] in inCart){
          if ( size in inCart[product["sku"]]){
            // console.log(size);
            if (inCart[product["sku"]][size] >= product["numberAvailable"][size]){

              addIt = false;
            }
          }
        }

        if (addIt){
          size_buttons.push(
            <Button
              class="size_button"
              variant="primary" size="sm"
              onClick={() => this.props.handleAddToCart(product, size)}
            >{size}
            </Button>
          )
        }

      }
  
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
          <div class="button_size_container">
            {size_buttons}
            {/* <Button
              bsStyle="warning"
              onClick={() => this.props.handleAddToCart(product)}
            >
              Add to Cart
            </Button> */}
          </div>
        </div>
      ); 
    }
  }