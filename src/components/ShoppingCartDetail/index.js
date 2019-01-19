import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

import CheckoutArea from './CheckoutArea';

import './index.scss';

export default class ShoppingCartDetail extends React.Component {
    render() {
        const itemsInCart = this.props.inShoppingCart;

        let cartItems = [];
        
        itemsInCart.forEach(item => {
            let aParticularProduct = null;

            cartItems.push(
                <p>{item.name} qty x ${item.price}<div className="removeButton">
                        <Button
                            bsStyle="danger"
                            bsSize="xsmall"
                            onClick={(item)=>console.log("removing this thing!!!!")}
                        >
                            <Glyphicon 
                                glyph="remove"
                            />
                        </Button>
                    </div></p>);
        });

      return (
        <div className="ShoppingCartDetail">
            {cartItems}
            <CheckoutArea
                inShoppingCart = {itemsInCart}
            />
        </div>
      );
    }
  }
  