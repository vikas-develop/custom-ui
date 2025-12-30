import React, { useState } from 'react';
import { Modal, Button } from '@vk-develop/custom-ui';

export const ModalDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
    <div id="component-modal" style={sectionStyle}>
      <h2 style={titleStyle}>Modals</h2>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal Title"
        size="medium"
      >
        <p>This is modal content</p>
      </Modal>
    </div>
  );
};

