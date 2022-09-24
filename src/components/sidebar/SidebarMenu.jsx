import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function SidebarMenu(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const navbar = isActive ? "navbar active" : "navbar";

  return (
    <Link to={props.to}>
      <div className={navbar}>
        <IconContext.Provider value={{ size: "24px", className: "nav-icon" }}>
          {props.icon}
          <p className="nav-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
