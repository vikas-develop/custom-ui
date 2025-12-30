import React, { useState } from 'react';
import { Autocomplete } from '@vk-develop/custom-ui';

export const AutocompleteDemo = () => {
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const autocompleteOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

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
    <div id="component-autocomplete" style={sectionStyle}>
      <h2 style={titleStyle}>Autocomplete</h2>
      <Autocomplete
        options={autocompleteOptions}
        value={autocompleteValue}
        onChange={setAutocompleteValue}
        placeholder="Search fruits..."
      />
    </div>
  );
};

