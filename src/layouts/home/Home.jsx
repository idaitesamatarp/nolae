import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../libraries/Library";
import Feed from "../feeds/Feed";
import Trending from "../trandings/Trending";
import Player from "../players/Player";
import Favorites from "../favorites/Favorites";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
