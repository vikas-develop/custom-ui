import React from 'react';
import { Chip } from '@vk-develop/custom-ui';

export const ChipDemo = () => {
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
    <div id="component-chip" style={sectionStyle}>
      <h2 style={titleStyle}>Chips</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Chip label="React" variant="primary" />
        <Chip label="JavaScript" variant="secondary" />
        <Chip label="Removable" onDelete={() => alert('Deleted')} variant="success" />
        <Chip label="Warning" variant="warning" />
      </div>
    </div>
  );
};

