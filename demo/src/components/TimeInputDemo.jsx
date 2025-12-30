import React, { useState } from 'react';
import { TimeInput } from '@vk-develop/custom-ui';

export const TimeInputDemo = () => {
  const [timeValue, setTimeValue] = useState(null);

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
    <div id="component-timeinput" style={sectionStyle}>
      <h2 style={titleStyle}>Time Input</h2>
      <div style={componentGridStyle}>
        <TimeInput
          label="24-Hour Format"
          value={timeValue}
          onChange={(time) => setTimeValue(time)}
          format="24h"
          placeholder="HH:MM"
        />
        <TimeInput
          label="12-Hour Format"
          format="12h"
          placeholder="HH:MM AM/PM"
        />
        <TimeInput
          label="Time with Helper"
          format="24h"
          helperText="Select a time"
        />
      </div>
    </div>
  );
};

