import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

import CheckoutArea from './CheckoutArea';

import './index.scss';

export default class ShoppingCartDetail extends React.Component {
    render() {
        const itemsInCart = this.props.inShoppingCart;
        const products = this.props.products;

        let cartItems = [];
        
        for(let key in itemsInCart){
            //let aParticularProduct = null;
            for(let size in itemsInCart[key]){
                if (itemsInCart[key][size] > 0){
                    cartItems.push( // doing the product thing not as an object was so dumb holy crap
                        <p>{products[key].name} {size} qty {itemsInCart[key][size]} x ${products[key].price}<div className="removeButton">
                                <Button
                                    bsStyle="danger"
                                    bsSize="xsmall"
                                    onClick={()=>this.props.handleRemoveFromCart(key, size)}
                                >
                                    <Glyphicon 
                                        glyph="remove"
                                    />
                                </Button>
                            </div></p>); // maybe make a plus and minus button to control the quanity in the cart
                }
            }
            
        }

      return (
        <div className="ShoppingCartDetail">
            {cartItems}
            <CheckoutArea
                products = {this.props.products}
                inShoppingCart = {itemsInCart}
            />
        </div>
      );
    }
  }
  