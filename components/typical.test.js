import React from 'react';
import { shallow } from 'enzyme';

import { Example } from './example';

test('starts at 0', () => {
  const wrapper = shallow(<Example />);
  expect(wrapper.state('counter')).toEqual(0);
});

test('clicking button works', () => {
  const wrapper = shallow(<Example />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.state('counter')).toEqual(-1);
});
