/*
  pulled from Kent C Dodds' Simply-React slides at https://github.com/kentcdodds/simply-react/blob/master/components/code-block.js
*/
import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

export const CodeBlock = ({ children, options = {}, style, ...props }) => (
  <div style={{ fontSize: 18, overflow: 'scroll', ...style }}>
    <CodeMirror
      value={children}
      options={{
        mode: 'jsx',
        theme: 'night-owl',
        lineNumber: false,
        readOnly: 'nocursor',
        ...options,
      }}
      {...props}
    />
  </div>
);
