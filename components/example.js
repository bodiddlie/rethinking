import React from 'react';

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
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
        <span>{counter}</span>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
