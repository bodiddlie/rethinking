import React from 'react';
//import styled from 'styled-components';
//import Flex from '../Flex';
//import Box from '../Box';

export const SplitHeader = ({ children }) => {
  const [header, a, ...rest] = React.Children.toArray(children.props.children);

  return (
    <React.Fragment>
      {header}
      <div style={{ width: '100%', display: 'flex' }}>
        <div>{a}</div>
        <div style={{ flex: 2 }}>{rest}</div>
      </div>
    </React.Fragment>
  );
};
