import React from 'react';
import { ScrollShadow } from '@vk-develop/custom-ui';

export const ScrollShadowDemo = () => {
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
    <div id="component-scrollshadow" style={sectionStyle}>
      <h2 style={titleStyle}>Scroll Shadow</h2>
      <ScrollShadow style={{ maxHeight: '200px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <div style={{ padding: '16px' }}>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ marginBottom: '16px', margin: '0 0 16px 0' }}>
              This is scrollable content item {i + 1}. Scroll to see the shadow effect.
            </p>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

