export const example = `
class Example extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  decrement = () => {
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }

  render() {
    const {counter} = this.state;
    return (
      <div>
        <button onClick={this.decrement}>Decrement</button>
        <span>{counter}</span>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
`;
