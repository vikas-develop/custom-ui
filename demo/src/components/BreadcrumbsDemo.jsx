import React from 'react';
import { Breadcrumbs } from '@vk-develop/custom-ui';

export const BreadcrumbsDemo = () => {
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
    <div id="component-breadcrumbs" style={sectionStyle}>
      <h2 style={titleStyle}>Breadcrumbs</h2>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Current Page' },
        ]}
      />
    </div>
  );
};

