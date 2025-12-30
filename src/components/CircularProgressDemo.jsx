import React from 'react';
import { CircularProgress } from '@vk-develop/custom-ui';

export const CircularProgressDemo = () => {
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
    <div id="component-circularprogress" style={sectionStyle}>
      <h2 style={titleStyle}>Circular Progress</h2>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <CircularProgress value={75} showLabel />
        <CircularProgress value={50} variant="indeterminate" />
        <CircularProgress value={90} color="#28a745" showLabel />
      </div>
    </div>
  );
};

