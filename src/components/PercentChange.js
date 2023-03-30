import React, { useEffect, useState } from 'react';

const PercentChange = ({percent}) => {

  const [color, setColor] = useState();

  useEffect(() => {
    if(percent) {
      if(percent >= 0) {
        setColor("#00ff00");
      } else {
        setColor("#FF0000");
      }
    } else {
      setColor("#FFFFF")
    }
  }, [])

  return (
    <p className="percent-change-container" style={{color}}>
      { percent ? percent.toFixed(2) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
