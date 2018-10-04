import React from 'react';

export default ({ value, label }) => (
  <span data-testid="display">{label + value}</span>
);
