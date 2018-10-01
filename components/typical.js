export const Typical = `
class SomeComponent extends React.Component {
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
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {counter}
      </div>
    )
  }
}

test('does something', () => {
  const wrapper = shallow(<SomeComponent />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('counter')).toBe(1);
})
`.trim();
