import React from "react";
import { IconContext } from "react-icons";
import "./audioControls.css";
import {
  IoPlayCircle,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPlayBack,
  IoPlayForward,
  IoPauseCircle,
} from "react-icons/io5";

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
          <IconContext.Provider value={{ size: "35px", color: "#fbbad8" }}>
            <IoPlaySkipBack />
          </IconContext.Provider>
        </div>
        <div className="action-btn flex">
          <IconContext.Provider value={{ size: "35px", color: "#fbbad8" }}>
            <IoPlayBack />
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
          <IconContext.Provider value={{ size: "50px" }}>
            {isPlaying ? <IoPauseCircle /> : <IoPlayCircle />}
          </IconContext.Provider>
        </div>
        <div className="action-btn flex">
          <IconContext.Provider value={{ size: "35px", color: "#fbbad8" }}>
            <IoPlayForward />
          </IconContext.Provider>
        </div>
        <div className="action-btn flex" onClick={handlePrev}>
          <IconContext.Provider value={{ size: "35px", color: "#fbbad8" }}>
            <IoPlaySkipForward />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
