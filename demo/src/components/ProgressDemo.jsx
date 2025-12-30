import React from 'react';
import { Progress } from '@vk-develop/custom-ui';

export const ProgressDemo = () => {
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
    <div id="component-progress" style={sectionStyle}>
      <h2 style={titleStyle}>Progress Bars</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Progress value={75} max={100} />
        <Progress value={60} max={100} label="Upload Progress" showLabel />
        <Progress value={80} variant="success" />
        <Progress value={50} variant="warning" />
        <Progress value={30} variant="error" />
      </div>
    </div>
  );
};

