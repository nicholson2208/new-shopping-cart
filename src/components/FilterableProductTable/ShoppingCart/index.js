import React from 'react';

import {Glyphicon, Button} from 'react-bootstrap'; 

export default class ShoppingCart extends React.Component {
  
  render() {

    let content = null;
    
    if(!this.props.isShoppingCartActive){
      content = <Glyphicon glyph="shopping-cart"/>;
    } else {
      content = "Close Cart"; //didn't work for some reason, but that's ok
    }
      
      return (
        <div class="cart">
                  <Button
                    block
                    bsStyle="default"
                    onClick={() => this.props.handleToggleCart() }
                  >{content}</Button>
                </div>
      );
    }
  }
