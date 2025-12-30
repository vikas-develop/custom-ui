import React from 'react';
import { Input } from '@vk-develop/custom-ui';

export const InputDemo = () => {
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

  const componentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  };

  return (
    <div id="component-input" style={sectionStyle}>
      <h2 style={titleStyle}>Inputs</h2>
      <div style={componentGridStyle}>
        <Input label="Text Input" placeholder="Enter text" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input label="Password" type="password" />
        <Input label="Error Input" error="This field is required" />
        <Input label="Helper Text" helperText="This is helper text" />
      </div>
    </div>
  );
};

