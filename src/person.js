import React from 'react';
import axios from 'axios';

import { Counter } from './counter';

export class Person extends React.Component {
  state = {
    id: this.props.person.id,
    name: this.props.person.name,
    count: this.props.person.count,
  };

  handleChange = delta => {
    this.setState(
      prevState => {
        const { count } = prevState;
        console.log(count);
        return { ...prevState, count: count + delta };
      },
      () => {
        axios.put(`/api/people/${this.state.id}`, this.state);
      }
    );
  };

  render() {
    const { name, count } = this.state;

    return (
      <div style={{ display: 'flex' }}>
        <span style={{ width: '200px' }}>{name}</span>
        <Counter value={count} handleChange={this.handleChange} />
      </div>
    );
  }
}
