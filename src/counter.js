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
        <button
          type="button"
          className="btn-dec"
          onClick={() => handleChange(-1)}
        >
          Decrement
        </button>
        <span className="counter-value">{value}</span>
        <button
          type="button"
          className="btn-inc"
          onClick={() => handleChange(1)}
        >
          Increment
        </button>
      </div>
    );
  }
}
