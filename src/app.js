import React from 'react';
import axios from 'axios';

import { Person } from './person';

export default class App extends React.Component {
  state = {
    people: [],
  };

  componentDidMount() {
    axios
      .get('/api/people')
      .then(response => response.data)
      .then(people => {
        this.setState({ people });
      });
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        <h1>Random Name Degrees of Kevin Bacon</h1>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '500px' }}
        >
          {people.map(p => (
            <Person key={p.id} person={p} />
          ))}
        </div>
      </div>
    );
  }
}
