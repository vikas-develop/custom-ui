import React from 'react';
import { Card } from '@vk-develop/custom-ui';

export const CardDemo = () => {
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

  const componentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  };

  return (
    <div id="component-card" style={sectionStyle}>
      <h2 style={titleStyle}>Cards</h2>
      <div style={componentGridStyle}>
        <Card title="Card Title" footer="Footer">
          This is card content
        </Card>
        <Card title="Another Card">
          More card content here
        </Card>
      </div>
    </div>
  );
};

