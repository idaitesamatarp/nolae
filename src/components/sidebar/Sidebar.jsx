import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarMenu from "./SidebarMenu";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { AiTwotoneFire } from "react-icons/ai";
import { BsMusicNoteBeamed, BsHeartFill } from "react-icons/bs";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState("");
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
      // console.log(response);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="Profile" className="profile-img" />

      <div>
        <SidebarMenu title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarMenu title="Trending" to="/trending" icon={<AiTwotoneFire />} />
        <SidebarMenu title="Player" to="/player" icon={<BsMusicNoteBeamed />} />
        <SidebarMenu title="Favorites" to="/favorites" icon={<BsHeartFill />} />
        <SidebarMenu
          title="Library"
          to="/"
          icon={<RiNeteaseCloudMusicFill />}
        />
      </div>
      <SidebarMenu title="Logout" to="" icon={<MdLogout />} />
    </div>
  );
}
