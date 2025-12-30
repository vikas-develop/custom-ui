import React, { useState } from 'react';
import { RadioGroup } from '@vk-develop/custom-ui';

export const RadioGroupDemo = () => {
  const [radioValue, setRadioValue] = useState('option1');

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
    <div id="component-radiogroup" style={sectionStyle}>
      <h2 style={titleStyle}>Radio Group</h2>
      <RadioGroup
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        value={radioValue}
        onChange={setRadioValue}
        direction="column"
      />
    </div>
  );
};

