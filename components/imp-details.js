import React from 'react';
import Button from './button';

export class ImpDetails extends React.Component {
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
        <span>{counter}</span>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
}
