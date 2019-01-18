import React from 'react';

import {Glyphicon, Button} from 'react-bootstrap'; 

export default class ShoppingCart extends React.Component {
  
  render() {
      
      return (
        <div class="cart"><Button
        block
        bsStyle="default"
        onClick={() => this.props.handleToggleCart() }
      ><Glyphicon glyph="shopping-cart"/></Button>
      </div>
      );
    }
  }
