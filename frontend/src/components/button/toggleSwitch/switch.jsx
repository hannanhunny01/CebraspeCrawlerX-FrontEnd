import React, { useState } from 'react';
import './switch.css'
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch">
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
