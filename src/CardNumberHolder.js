import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: 'govno'
  }
  handleChange = (e) => {
    this.setState({cardNumber: e.target.value})
  }
  handleKeyDown = e => {
    console.log(this.state.cardNumber)
    console.log(this.state.disabled)
    if (e.keyCode === 13)
    this.setState({cardNumber: e.target.value, disabled: true})
    return <div>well done</div>
  }
  render() {
    return (
      <>
        <div>{this.state.cardNumber}</div>
        <CardNumberInput
          disabled={this.state.disabled}
          handleKeyDown={this.handleKeyDown}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default CardNumberHolder;
