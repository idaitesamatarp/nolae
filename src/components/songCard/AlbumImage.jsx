import React from "react";
import "./albumImage.css";

export default function AlbumImage({ url }) {
  return (
    <div className="album-image flex">
      <img src={url} alt="album art" className="album-image-art" />
      <div className="album-image-shadow">
        <img src={url} alt="shadow" className="album-image-shadow" />
      </div>
    </div>
  );
}
