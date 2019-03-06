import React from 'react';
//import {Glyphicon, Button} from 'react-bootstrap';

import './index.scss';


export default class CheckoutArea extends React.Component {
    render() {
        const cartItems = this.props.inShoppingCart;

        let totalPrice = 0;
        let totalItems = 0;

        cartItems.forEach(item => {
            totalPrice += item.price;
            totalItems++;
        });

        return (
            <div>
                <p>
                    Totals:
                </p>
                <p>
                    {totalItems} items for a total of ${totalPrice}
                </p>
            </div>
        );
    }

}