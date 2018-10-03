import React from 'react';

const style = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'start',
  marginTop: '1.5rem',
};

export default ({ children }) => <div style={style}>{children}</div>;
