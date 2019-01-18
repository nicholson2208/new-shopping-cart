import React from 'react';

import './index.scss';

export default class ShoppingCartDetail extends React.Component {
    
    
    render() {
        let cartItems = this.props.inShoppingCart.map((item) => {
            return(
                <p>{item.name}</p>
            );
          });
    

      return (
        <div className="ShoppingCartDetail">
            {cartItems}
        </div>
      );
    }
  }
  