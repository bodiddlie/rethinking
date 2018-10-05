import React from 'react';

export class Counter extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          width: '200px',
          justifyContent: 'space-between',
        }}
      >
        <button type="button" onClick={() => handleChange(-1)}>
          Decrement
        </button>
        <span>{value}</span>
        <button type="button" onClick={() => handleChange(1)}>
          Increment
        </button>
      </div>
    );
  }
}
