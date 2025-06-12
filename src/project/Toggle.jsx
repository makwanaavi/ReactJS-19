import { useState } from "react";
import "./Toggle.css";
export const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch " style={{backgroundColor : isOn ? "#f44336" : "#4caf50"}} onClick={handleToggleSwitch}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};
