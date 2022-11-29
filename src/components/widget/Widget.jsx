import { React, useState, useEffect } from "react";
import "./widget.css";
import apiClient from "../../spotify";

export default function Widget({ currentTrack }) {
  const [artists, setArtist] = useState([]);
  const [images, setImages] = useState("");

  useEffect(() => {
    apiClient
      .get("artists/" + currentTrack?.album?.artists[0]?.id)
      .then((res) => {
        setArtist(res.data);
        setImages(res.data.images[1].url);
      });
  }, [currentTrack?.album?.artists]);
  //   console.log("artist", artists);

  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const genreList = [];
  artists?.genres?.forEach((genre) => {
    genreList.push(genre);
  });

  return (
    <div className="widget-card flex">
      <div className="widget-card-top flex">
        <div className="widget-card-artist flex">
          <div className="widget-card-artists-label">
            <p className="artist-name">{artists?.name}</p>
            <p className="artist-follower">
              {numberWithCommas(artists?.followers?.total)} Followers
            </p>
            <p className="artist-genre">
              Genre : {!genreList.length ? "-" : genreList.join(", ")}
            </p>
          </div>
          <div className="widget-card-artists-img">
            <img src={images} alt="artists-img" />
          </div>
        </div>
      </div>
      <div className="widget-card-bottom flex"></div>
    </div>
  );
}
