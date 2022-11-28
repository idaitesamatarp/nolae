import React, { useRef, useState, useEffect } from "react";
import "./audioplayer.css";
import AudioImage from "./AudioImage";
import AudioControls from "./AudioControls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  // console.log("audioref", audioRef.current);

  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currenPercentage = duration ? (trackProgress / duration) * 100 : 1;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [2000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  // console.log("total", total);
  return (
    <div className="audio-player-card flex">
      <div className="audio-player-left flex">
        <AudioImage image={currentTrack?.album?.images[0]?.url} />
      </div>
      <div className="audio-player-label flex">
        <p className="songname">{currentTrack?.name}</p>
        <p className="artist">{currentTrack?.album?.artists[0].name}</p>
      </div>
      <div className="audio-player-right flex">
        <AudioControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
        />
        <div className="song-duration flex">
          <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
          <ProgressBar
            percentage={currenPercentage}
            isPlaying={true}
            color="#554994"
            size={400}
          />
          <p className="duration">0:30</p>
        </div>
      </div>
    </div>
  );
}
