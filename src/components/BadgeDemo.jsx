import React from 'react';
import { Badge } from '@vk-develop/custom-ui';

export const BadgeDemo = () => {
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
    <div id="component-badge" style={sectionStyle}>
      <h2 style={titleStyle}>Badges</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge variant="primary">New</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="error">3</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="primary" dot />
      </div>
    </div>
  );
};

