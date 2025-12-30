import React from 'react';
import { User } from '@vk-develop/custom-ui';

export const UserDemo = () => {
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
    <div id="component-user" style={sectionStyle}>
      <h2 style={titleStyle}>User</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <User
          name="John Doe"
          description="Software Engineer"
          size="medium"
        />
        <User
          name="Jane Smith"
          description="Product Manager"
          size="large"
        />
        <User
          name="Bob Johnson"
          description="UI/UX Designer"
          size="small"
        />
        <User
          name="Alice Brown"
          description="Frontend Developer"
          showAvatar={false}
        />
      </div>
    </div>
  );
};

