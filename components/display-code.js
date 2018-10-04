import React from 'react';

export const Display = ({ value, label }) => (
  <span>
    {label} {value}
  </span>
);

export const BadDisplay = ({ value, label }) => <span>{label + value}</span>;
