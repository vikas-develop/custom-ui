import React from 'react';
import { Button } from '@vk-develop/custom-ui';

export const ButtonDemo = () => {
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
    <div id="component-button" style={sectionStyle}>
      <h2 style={titleStyle}>Buttons</h2>
      <div style={componentGridStyle}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
};

