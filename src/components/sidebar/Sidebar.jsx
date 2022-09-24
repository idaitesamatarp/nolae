import React from "react";
import "./sidebar.css";
import SidebarMenu from "./SidebarMenu";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { AiTwotoneFire } from "react-icons/ai";
import { BsMusicNoteBeamed, BsHeartFill } from "react-icons/bs";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src="man.png" alt="Profile" className="profile-img" />

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
