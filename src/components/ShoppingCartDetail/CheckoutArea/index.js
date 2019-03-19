import React from 'react';

import './index.scss';


export default class CheckoutArea extends React.Component {
    render() {
        const cartItems = this.props.inShoppingCart;
        const products = this.props.products;

        let totalPrice = 0;
        let totalItems = 0;

        
        for(let item in cartItems){
            for(let size in cartItems[item]){
                if(cartItems[item][size]){
                    totalPrice +=  cartItems[item][size] *products[item].price;
                    totalItems += cartItems[item][size];
                }
            }
            
        };

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