import React from 'react';
import { shallow } from 'enzyme';

import { ImpDetails } from './imp-details';

test('starts at 0', () => {
  const wrapper = shallow(<ImpDetails />);
  expect(wrapper.find('span').text()).toEqual('0');
});

test('decrement does - 1', () => {
  const wrapper = shallow(<ImpDetails />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.find('span').text()).toEqual('-1');
});

test('increment does + 1', () => {
  const wrapper = shallow(<ImpDetails />);
  wrapper
    .find('button')
    .last()
    .simulate('click');
  expect(wrapper.find('span').text()).toEqual('1');
});
