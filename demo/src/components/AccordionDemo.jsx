import React from 'react';
import { Accordion } from '@vk-develop/custom-ui';

export const AccordionDemo = () => {
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
    <div id="component-accordion" style={sectionStyle}>
      <h2 style={titleStyle}>Accordion</h2>
      <Accordion title="Section 1" defaultOpen={false}>
        This is accordion content
      </Accordion>
      <Accordion title="Section 2" defaultOpen={true}>
        Another section with more content
      </Accordion>
    </div>
  );
};

