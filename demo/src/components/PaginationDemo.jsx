import React, { useState } from 'react';
import { Pagination } from '@vk-develop/custom-ui';

export const PaginationDemo = () => {
  const [selectedPage, setSelectedPage] = useState(1);

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
    <div id="component-pagination" style={sectionStyle}>
      <h2 style={titleStyle}>Pagination</h2>
      <Pagination
        currentPage={selectedPage}
        totalPages={20}
        onPageChange={setSelectedPage}
        maxVisible={5}
      />
    </div>
  );
};

