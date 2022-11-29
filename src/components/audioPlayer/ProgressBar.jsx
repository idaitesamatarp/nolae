import React from "react";
import "./progressBar.css";

export default function ProgressBar({ percentage, size, color }) {
  const containerStyles = {
    height: 12,
    width: size,
    backgroundColor: "#9991be",
    borderRadius: 50,
    margin: "0px 10px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
    </div>
  );
}
