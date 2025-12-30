import React from 'react';
import { Divider } from '@vk-develop/custom-ui';

export const DividerDemo = () => {
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
    <div id="component-divider" style={sectionStyle}>
      <h2 style={titleStyle}>Divider</h2>
      <Divider />
      <Divider text="OR" />
      <Divider variant="dashed" />
      <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
        <span>Left</span>
        <Divider orientation="vertical" spacing="medium" style={{ height: '40px', display: 'inline-block' }} />
        <span>Right</span>
      </div>
    </div>
  );
};

