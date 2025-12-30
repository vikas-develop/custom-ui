import React, { useState } from 'react';
import { RangeCalendar } from '@vk-develop/custom-ui';

export const RangeCalendarDemo = () => {
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
    <div id="component-rangecalendar" style={sectionStyle}>
      <h2 style={titleStyle}>Range Calendar</h2>
      <RangeCalendar
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  );
};

