import React, { useCallback, useState } from "react";
import Box from "./useCall_components/Box";

const UseCallback = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "green",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      />
      <Box createBoxStyle={createBoxStyle} />
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default UseCallback;
