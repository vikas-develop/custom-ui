import React from 'react';
import { Code } from '@vk-develop/custom-ui';

export const CodeDemo = () => {
  const sectionStyle = {
    marginBottom: '40px',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#333',
  };

  return (
    <div id="component-code" style={sectionStyle}>
      <h2 style={titleStyle}>Code</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Code inline>const x = 5;</Code>
        <Code language="javascript">
          {`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
        </Code>
      </div>
    </div>
  );
};

