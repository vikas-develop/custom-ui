import React, { useState } from 'react';
import { Toast, Button } from '@vk-develop/custom-ui';

export const ToastDemo = () => {
  const [showToast, setShowToast] = useState(null);

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
    <div id="component-toast" style={sectionStyle}>
      <h2 style={titleStyle}>Toast</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setShowToast('success')}>Show Success Toast</Button>
        <Button onClick={() => setShowToast('error')}>Show Error Toast</Button>
        <Button onClick={() => setShowToast('warning')}>Show Warning Toast</Button>
        <Button onClick={() => setShowToast('info')}>Show Info Toast</Button>
      </div>
      {showToast && (
        <Toast
          message={`This is a ${showToast} toast notification!`}
          variant={showToast}
          duration={3000}
          position="top-right"
          onClose={() => setShowToast(null)}
        />
      )}
    </div>
  );
};

