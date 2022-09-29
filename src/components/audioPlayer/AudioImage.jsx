import React from "react";
import "./audioImage.css";

export default function AudioImage({ image }) {
  return (
    <div className="audio-image flex">
      <img src={image} alt="audio art" className="audio-image-art" />
    </div>
  );
}
