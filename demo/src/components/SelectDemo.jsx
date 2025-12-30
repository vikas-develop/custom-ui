import React, { useState } from 'react';
import { Select } from '@vk-develop/custom-ui';

export const SelectDemo = () => {
  const [selectedSelect, setSelectedSelect] = useState(null);

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
    <div id="component-select" style={sectionStyle}>
      <h2 style={titleStyle}>Select</h2>
      <Select
        label="Select Option"
        options={[
          { value: 'opt1', label: 'Option 1' },
          { value: 'opt2', label: 'Option 2' },
          { value: 'opt3', label: 'Option 3' },
        ]}
        value={selectedSelect}
        onChange={setSelectedSelect}
        placeholder="Choose..."
      />
    </div>
  );
};

