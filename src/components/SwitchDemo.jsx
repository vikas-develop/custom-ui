import React, { useState } from 'react';
import { Switch } from '@vk-develop/custom-ui';

export const SwitchDemo = () => {
  const [switchChecked, setSwitchChecked] = useState(false);

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
    <div id="component-switch" style={sectionStyle}>
      <h2 style={titleStyle}>Switch</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Switch
          checked={switchChecked}
          onChange={setSwitchChecked}
          label="Enable notifications"
        />
        <Switch checked={true} label="Already enabled" />
        <Switch checked={false} disabled label="Disabled" />
      </div>
    </div>
  );
};

