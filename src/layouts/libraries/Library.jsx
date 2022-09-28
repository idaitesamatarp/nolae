import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import api from "../../spotify";
import "./library.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    api.get("me/playlists").then((response) => {
      // console.log("response", response.data.items[0].id);
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              alt="playlist-img"
              className="playlist-image"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
                <BsPlayCircleFill />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
