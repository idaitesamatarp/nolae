import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import apiClient from "../../spotify";
import "./player.css";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="player-card">
        <div className="left-player-body"></div>
        <div className="right-player-body">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
        <div className="bottom-player-body">
          <AudioPlayer
            album={currentTrack?.album}
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
}
