import React, { Component } from 'react';

import {Glyphicon, Button} from 'react-bootstrap'; 

export default class ShoppingCart extends React.Component {
    render() {
      return (
        <div class="cart"><Button
        block
        bsStyle="default"
      ><Glyphicon glyph="shopping-cart"/></Button></div>
      );
    }
  }
