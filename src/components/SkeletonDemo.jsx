import React from 'react';
import { Skeleton } from '@vk-develop/custom-ui';

export const SkeletonDemo = () => {
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
    <div id="component-skeleton" style={sectionStyle}>
      <h2 style={titleStyle}>Skeleton</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Skeleton variant="text" width="100%" height="20px" />
        <Skeleton variant="text" width="80%" height="20px" />
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton variant="text" width="200px" height="20px" />
        </div>
        <Skeleton variant="rectangular" width="100%" height="200px" />
      </div>
    </div>
  );
};

