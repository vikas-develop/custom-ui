import React, { useState } from 'react';
import { Popover, Button } from '@vk-develop/custom-ui';

export const PopoverDemo = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

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
    <div id="component-popover" style={sectionStyle}>
      <h2 style={titleStyle}>Popover</h2>
      <Popover
        trigger={<Button>Click for Popover</Button>}
        content={
          <div>
            <h4>Popover Title</h4>
            <p>This is popover content</p>
          </div>
        }
        position="bottom"
        isOpen={popoverOpen}
        onOpenChange={setPopoverOpen}
      />
    </div>
  );
};

