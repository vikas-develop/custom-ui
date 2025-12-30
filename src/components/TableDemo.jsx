import React from 'react';
import { Table } from '@vk-develop/custom-ui';

export const TableDemo = () => {
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

  const tableColumns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'status', header: 'Status' },
  ];

  const tableData = [
    { name: 'John Doe', age: 30, status: 'Active' },
    { name: 'Jane Smith', age: 25, status: 'Inactive' },
    { name: 'Bob Johnson', age: 35, status: 'Active' },
  ];

  return (
    <div id="component-table" style={sectionStyle}>
      <h2 style={titleStyle}>Table</h2>
      <Table
        columns={tableColumns}
        data={tableData}
        striped
        bordered
        hoverable
      />
    </div>
  );
};

