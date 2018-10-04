import React from 'react';
import { shallow } from 'enzyme';

import { BadFalseConf2 } from './false-conf2-broken';

test('starts at 0', () => {
  const wrapper = shallow(<BadFalseConf2 />);
  expect(wrapper.state('counter')).toBe(0);
});

test('decrement does - 1', () => {
  const wrapper = shallow(<BadFalseConf2 />);
  wrapper.instance().decrement();
  expect(wrapper.state('counter')).toBe(-1);
});

test('increment does + 1', () => {
  const wrapper = shallow(<BadFalseConf2 />);
  wrapper.instance().increment();
  expect(wrapper.state('counter')).toBe(1);
});
