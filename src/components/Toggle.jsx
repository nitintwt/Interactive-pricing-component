// ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleHandler = () => {
    setIsActive(!isActive);
    console.log(isActive)
  };

  return (
    <div className={`toggle-container relative w-12 h-7 rounded-full p-1 ${isActive ? 'bg-sliderbg' : 'bg-gray-400'}`} onClick={toggleHandler}>
      <div className={`toggle-switch absolute  left-1 w-5 h-5 bg-white rounded-full transition-transform transform ${isActive ? 'translate-x-full' : ''}`}></div>
    </div>
  );
};

export default ToggleButton;
