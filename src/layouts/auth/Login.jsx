import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint} className="login-btn">
        LOGIN
      </a>
    </div>
  );
}
