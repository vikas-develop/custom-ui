import React from 'react';
import { Checkbox } from '@vk-develop/custom-ui';

export const CheckboxDemo = () => {
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
    <div id="component-checkbox" style={sectionStyle}>
      <h2 style={titleStyle}>Checkboxes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" checked />
        <Checkbox label="Disabled" disabled />
      </div>
    </div>
  );
};

