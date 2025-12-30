import React, { useState } from 'react';
import { Drawer, Button } from '@vk-develop/custom-ui';

export const DrawerDemo = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    <div id="component-drawer" style={sectionStyle}>
      <h2 style={titleStyle}>Drawer</h2>
      <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        position="right"
        title="Drawer Title"
      >
        <p>Drawer content goes here</p>
      </Drawer>
    </div>
  );
};

