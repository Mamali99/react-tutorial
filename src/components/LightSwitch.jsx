import { useState } from "react";

export default function LightSwitch() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div>
      <p>
        {/* YOUR TERNARY OPERATOR GOES HERE to display the message */}
        The light is {isLightOn ? "On!!!!" : "Off!!!!"}
      </p>

      <button onClick={toggleLight}>Toggle Light</button>
    </div>
  );
}
