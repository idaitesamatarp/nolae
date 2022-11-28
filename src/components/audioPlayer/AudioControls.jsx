import React from "react";
import { IconContext } from "react-icons";
import "./audioControls.css";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";

export default function AudioControls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="audio-control flex">
      <div className="control-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IconContext.Provider value={{ size: "35px", color: "#9991be" }}>
            <TbPlayerSkipBack />
          </IconContext.Provider>
        </div>

        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <IconContext.Provider value={{ size: "35px" }}>
            {isPlaying ? <IoPauseCircle /> : <IoPlayCircle />}
          </IconContext.Provider>
        </div>

        <div className="action-btn flex" onClick={handleNext}>
          <IconContext.Provider value={{ size: "35px", color: "#9991be" }}>
            <TbPlayerSkipForward />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
