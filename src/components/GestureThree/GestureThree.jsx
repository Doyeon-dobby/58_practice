/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const GestureThree = ({ className }) => {
  return (
    <div className={`gesture-three ${className}`}>
      <div className="rectangle" />
      <img
        className="vector"
        alt="Vector"
        src="https://generation-sessions.s3.amazonaws.com/3e5c5c962fb12b7fabbec478419a8a79/img/vector-1.svg"
      />
      <img
        className="union"
        alt="Union"
        src="https://generation-sessions.s3.amazonaws.com/3e5c5c962fb12b7fabbec478419a8a79/img/union-2.svg"
      />
      <div className="div" />
    </div>
  );
};
