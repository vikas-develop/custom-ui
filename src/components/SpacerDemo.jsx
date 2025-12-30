import React from 'react';
import { Spacer } from '@vk-develop/custom-ui';

export const SpacerDemo = () => {
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
    <div id="component-spacer" style={sectionStyle}>
      <h2 style={titleStyle}>Spacer</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Before</span>
        <Spacer size="large" axis="horizontal" />
        <span>After</span>
      </div>
      <div>
        <span>Above</span>
        <Spacer size="medium" axis="vertical" />
        <span>Below</span>
      </div>
    </div>
  );
};

