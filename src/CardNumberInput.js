import React, {Component} from 'react';

class CardNumberInput extends Component {

  render() {
    return (
      <>
        <input
          onKeyDown={this.props.handleKeyDown}
          // onChange={this.props.handleChange}
          disabled={this.props.disabled}
        ></input>
      </>
    );
  }
}

export default CardNumberInput;
