import React, { useState } from 'react';
import { Slider } from '@vk-develop/custom-ui';

export const SliderDemo = () => {
  const [sliderValue, setSliderValue] = useState(50);

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
    <div id="component-slider" style={sectionStyle}>
      <h2 style={titleStyle}>Slider</h2>
      <Slider
        value={sliderValue}
        onChange={setSliderValue}
        min={0}
        max={100}
        label="Volume"
        showValue
        marks
      />
    </div>
  );
};

