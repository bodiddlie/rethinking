import React from 'react';
import { shallow } from 'enzyme';

import { Example } from './example';

test('starts at 0', () => {
  const wrapper = shallow(<Example />);
  expect(wrapper.find('span').text()).toEqual('0');
});

test('decrement does - 1', () => {
  const wrapper = shallow(<Example />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.find('span').text()).toEqual('-1');
});

test('increment does + 1', () => {
  const wrapper = shallow(<Example />);
  wrapper
    .find('button')
    .last()
    .simulate('click');
  expect(wrapper.find('span').text()).toEqual('1');
});
