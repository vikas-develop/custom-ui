import React from 'react';
import { Snippet } from '@vk-develop/custom-ui';

export const SnippetDemo = () => {
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
    <div id="component-snippet" style={sectionStyle}>
      <h2 style={titleStyle}>Snippet</h2>
      <Snippet copyable symbol="$">
        npm install @vk-develop/custom-ui
      </Snippet>
    </div>
  );
};

