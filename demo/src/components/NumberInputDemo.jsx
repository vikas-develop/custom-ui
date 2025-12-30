import React, { useState } from 'react';
import { NumberInput } from '@vk-develop/custom-ui';

export const NumberInputDemo = () => {
  const [numberValue, setNumberValue] = useState(0);

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
    <div id="component-numberinput" style={sectionStyle}>
      <h2 style={titleStyle}>Number Input</h2>
      <div style={componentGridStyle}>
        <NumberInput
          label="Quantity"
          value={numberValue}
          onChange={setNumberValue}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
};

