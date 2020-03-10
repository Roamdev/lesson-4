import React, {Component, Children } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChild: props.children[0].props.title
    }
  }
  handleClick(title) {
    this.setState({showChild: title})
  }
  render() {
    console.log(this.state.showChild)
    return (
      <>
      <ul>
        {
          this.props.children.map(({ props: {title}}) => (
            <li key={title} onClick={() => this.handleClick(title)}>{title}</li>
          ))
        }
      </ul>
      <div>
        <div>
          {Children.map(this.props.children, (child) => (this.state.showChild === child.props.title) && child)}
        </div>
      </div>
      </>
    );
  }
}

export default Switcher;
