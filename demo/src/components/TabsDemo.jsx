import React, { useState } from 'react';
import { Tabs } from '@vk-develop/custom-ui';

export const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <div id="component-tabs" style={sectionStyle}>
      <h2 style={titleStyle}>Tabs</h2>
      <Tabs
        items={[
          { label: 'Tab 1', content: <div style={{ padding: '16px' }}>Content for Tab 1</div> },
          { label: 'Tab 2', content: <div style={{ padding: '16px' }}>Content for Tab 2</div> },
          { label: 'Tab 3', content: <div style={{ padding: '16px' }}>Content for Tab 3</div> },
        ]}
        activeTab={activeTab}
        onChange={(index) => setActiveTab(index)}
        variant="default"
      />
      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Pills Variant</h3>
        <Tabs
          items={['Pill 1', 'Pill 2', 'Pill 3']}
          variant="pills"
        />
      </div>
      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Underline Variant</h3>
        <Tabs
          items={['Underline 1', 'Underline 2', 'Underline 3']}
          variant="underline"
        />
      </div>
    </div>
  );
};

