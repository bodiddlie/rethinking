import React from 'react';
import { shallow } from 'enzyme';

import { FalseConf1 } from './false-conf1';

test('starts at 0', () => {
  const wrapper = shallow(<FalseConf1 />);
  expect(wrapper.state('counter')).toBe(0);
});

test('decrement does - 1', () => {
  const wrapper = shallow(<FalseConf1 />);
  wrapper.instance().decrement();
  expect(wrapper.state('counter')).toBe(-1);
});

test('increment does + 1', () => {
  const wrapper = shallow(<FalseConf1 />);
  wrapper.instance().increment();
  expect(wrapper.state('counter')).toBe(1);
});
