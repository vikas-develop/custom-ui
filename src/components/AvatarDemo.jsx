import React from 'react';
import { Avatar } from '@vk-develop/custom-ui';

export const AvatarDemo = () => {
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
    <div id="component-avatar" style={sectionStyle}>
      <h2 style={titleStyle}>Avatars</h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Avatar name="John Doe" size="small" />
        <Avatar name="Jane Smith" size="medium" />
        <Avatar name="Bob Johnson" size="large" />
        <Avatar name="Alice" shape="square" />
      </div>
    </div>
  );
};

