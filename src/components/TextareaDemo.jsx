import React, { useState } from 'react';
import { Textarea } from '@vk-develop/custom-ui';

export const TextareaDemo = () => {
  const [textareaValue, setTextareaValue] = useState('');

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
    <div id="component-textarea" style={sectionStyle}>
      <h2 style={titleStyle}>Textarea</h2>
      <div style={componentGridStyle}>
        <Textarea
          label="Description"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          rows={4}
          placeholder="Enter description..."
          helperText="Enter a detailed description"
        />
        <Textarea
          label="Comments"
          rows={6}
          resize="both"
          maxLength={200}
          showCount={true}
          placeholder="Enter comments..."
        />
        <Textarea
          label="Notes"
          rows={3}
          resize="none"
          error="This field is required"
        />
      </div>
    </div>
  );
};

