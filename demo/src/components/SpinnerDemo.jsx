import React from 'react';
import { Spinner } from '@vk-develop/custom-ui';

export const SpinnerDemo = () => {
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
    <div id="component-spinner" style={sectionStyle}>
      <h2 style={titleStyle}>Spinners</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </div>
  );
};

