import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState(colors.white1);
  const [displayValue, setDisplayValue] = useState("Chargement...");

  useEffect(() => {
    if (percent !== undefined && percent !== null) {
      setColor(percent >= 0 ? colors.green1 : colors.red1);
      setDisplayValue(percent.toFixed(1) + "%");
    } else {
      setColor(colors.white1);
      setDisplayValue("-");
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {displayValue}
    </p>
  );
};

export default PercentChange;
