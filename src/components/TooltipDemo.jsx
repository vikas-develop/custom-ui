import React from 'react';
import { Tooltip, Button } from '@vk-develop/custom-ui';

export const TooltipDemo = () => {
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
    <div id="component-tooltip" style={sectionStyle}>
      <h2 style={titleStyle}>Tooltip</h2>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Tooltip content="This is a top tooltip" position="top">
          <Button>Hover Top</Button>
        </Tooltip>
        <Tooltip content="This is a bottom tooltip" position="bottom">
          <Button>Hover Bottom</Button>
        </Tooltip>
        <Tooltip content="This is a left tooltip" position="left">
          <Button>Hover Left</Button>
        </Tooltip>
        <Tooltip content="This is a right tooltip" position="right">
          <Button>Hover Right</Button>
        </Tooltip>
        <Tooltip content="This tooltip has a delay" delay={500}>
          <Button>Delayed Tooltip</Button>
        </Tooltip>
        <Tooltip content="Tooltip on text">
          <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover me</span>
        </Tooltip>
      </div>
    </div>
  );
};

