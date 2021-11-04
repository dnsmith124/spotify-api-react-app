import React from "react";
import spotifyLogo from './SpotifyLogo.png';
import "./spotify-login.scss";

const SpotifyLogin = ({ loginUrl }) => {
  return (
    <div className="login">
      <img
        src={spotifyLogo}
        className="spotify-logo"
        alt="Spotify logo"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default SpotifyLogin;