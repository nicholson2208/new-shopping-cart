import React from 'react';

import Product from './Product';
import './index.scss';


export default class ProductTable extends React.Component {
    render() {

      const rows = [];    
      this.props.products.forEach((product) => {

        // do a check here of whether there are any size left
        let addIt = false;



        for(let size in product["numberAvailable"]){
          if(this.props.sizesDisplaying[size]){
            addIt = true;
            // console.log("should be displaying", product["sku"], size);
            if (product["sku"] in this.props.inShoppingCart){
              if ( size in this.props.inShoppingCart[product["sku"]]){
                // console.log(size);
                if (this.props.inShoppingCart[product["sku"]][size] >= product["numberAvailable"][size]){
    
                  addIt = false;
                }
              }
            }
          }
        }

        if(addIt){
          rows.push(
            <Product
              product={product}
              inShoppingCart = {this.props.inShoppingCart}
              handleAddToCart = {(p, s) => this.props.handleAddToCart(p, s)}
              key={product.name} />
          );
        }
        
      });
  
      return (
        <div id="holder">{rows}</div>
      );
    }
  }