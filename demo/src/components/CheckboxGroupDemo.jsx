import React, { useState } from 'react';
import { CheckboxGroup } from '@vk-develop/custom-ui';

export const CheckboxGroupDemo = () => {
  const [checkboxValues, setCheckboxValues] = useState([]);

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
    <div id="component-checkboxgroup" style={sectionStyle}>
      <h2 style={titleStyle}>Checkbox Group</h2>
      <CheckboxGroup
        options={[
          { value: 'opt1', label: 'Option 1' },
          { value: 'opt2', label: 'Option 2' },
          { value: 'opt3', label: 'Option 3' },
        ]}
        value={checkboxValues}
        onChange={setCheckboxValues}
        direction="column"
      />
    </div>
  );
};

