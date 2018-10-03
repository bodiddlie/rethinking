import React from 'react';
import { shallow } from 'enzyme';

import { ImpDetails } from './imp-details';

test('starts at 0', () => {
  const wrapper = shallow(<ImpDetails />);
  expect(wrapper.find('span').text()).toEqual('0');
});

test('decrement does - 1', () => {
  const wrapper = shallow(<ImpDetails />);
  wrapper.instance().decrement();
  expect(wrapper.find('span').text()).toEqual('-1');
});

test('increment does + 1', () => {
  const wrapper = shallow(<ImpDetails />);
  wrapper.instance().increment();
  expect(wrapper.find('span').text()).toEqual('1');
});
