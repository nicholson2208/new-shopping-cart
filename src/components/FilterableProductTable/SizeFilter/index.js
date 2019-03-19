import React from 'react';

import {Button} from 'react-bootstrap';

export default class SizeFilter extends React.Component {

  render() {
    const sizes = ["S", "M", "L"];
    let size_selector_buttons = [];

    sizes.forEach(a_size => {
        size_selector_buttons.push(
            <Button
                bsStyle="default"
                onClick={() => this.props.handleToggleFilter(a_size)}
            >
                {a_size}
            </Button>
        )
    });

      return (
        <div className="filter">
        <p>Select the Sizes to display</p>
            {size_selector_buttons}
        </div>
      );
    }
  }
