import React from 'react';
import Button from './button';
import Display from './display';

export class Example extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button onClick={this.decrement}>Decrement</Button>
        <Display>{counter}</Display>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
}
