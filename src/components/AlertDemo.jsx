import React from 'react';
import { Alert } from '@vk-develop/custom-ui';

export const AlertDemo = () => {
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
    <div id="component-alert" style={sectionStyle}>
      <h2 style={titleStyle}>Alerts</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Alert variant="success" title="Success!">
          Your changes have been saved
        </Alert>
        <Alert variant="error" title="Error">
          Something went wrong
        </Alert>
        <Alert variant="warning" title="Warning">
          This action cannot be undone
        </Alert>
        <Alert variant="info">Here's some information</Alert>
      </div>
    </div>
  );
};

