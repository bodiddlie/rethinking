import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { BadFalseConf2 } from './false-conf2-broken';

afterEach(cleanup);

test('starts at 0', () => {
  const { getByText, getByTestId } = render(<BadFalseConf2 />);
  expect(getByTestId('display')).toHaveTextContent('0');
});

test('decrement does - 1', () => {
  const { getByText, getByTestId } = render(<BadFalseConf2 />);
  fireEvent.click(getByText('Decrement'));
  expect(getByTestId('display')).toHaveTextContent('-1');
});

test('decrement does + 1', () => {
  const { getByText, getByTestId } = render(<BadFalseConf2 />);
  fireEvent.click(getByText('Increment'));
  expect(getByTestId('display')).toHaveTextContent('1');
});
