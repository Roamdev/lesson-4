import React, {Component} from 'react';
import './App.css';
import Switcher from './Switcher';
import CardNumberHolder from './CardNumberHolder';
import ModalButton from './ModalButton';

class App extends Component {

  render() {
    return (
      <Switcher>
        <CardNumberHolder
          key='childFirst'  
          title='childFirst'
        />
        <ModalButton
          key='childSecond'
          title='childSecond'
        />
      </Switcher>
    );
  }
}

export default App;
