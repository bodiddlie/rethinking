import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ImpDetails } from './imp-details';

afterEach(cleanup);

test('starts at 0', () => {
  const { getByText, getByTestId } = render(<ImpDetails />);
  expect(getByTestId('display')).toHaveTextContent('0');
});

test('decrement does - 1', () => {
  const { getByText, getByTestId } = render(<ImpDetails />);
  fireEvent.click(getByText('Decrement'));
  expect(getByTestId('display')).toHaveTextContent('-1');
});

test('decrement does + 1', () => {
  const { getByText, getByTestId } = render(<ImpDetails />);
  fireEvent.click(getByText('Increment'));
  expect(getByTestId('display')).toHaveTextContent('1');
});
