import React, { useState } from 'react';
import { DateRangePicker } from '@vk-develop/custom-ui';

export const DateRangePickerDemo = () => {
  const [dateRange, setDateRange] = useState(null);

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
    <div id="component-daterangepicker" style={sectionStyle}>
      <h2 style={titleStyle}>Date Range Picker</h2>
      <DateRangePicker
        label="Select Date Range"
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  );
};

