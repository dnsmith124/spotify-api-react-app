import React from "react";
import "./spotify-app.scss";
import SpotifyBody from "../SpotifyBody/SpotifyBody";
import SpotifySidebar from "../SpotifySidebar/SpotifySidebar";
import SpotifyFooter from "../SpotifyFooter/SpotifyFooter";

const SpotifyApp = ({ spotify }) => {
  
  return (
    <div className="app">
      <div className="app__body">
        <SpotifySidebar />
        <SpotifyBody spotify={spotify} />
      </div>
      <SpotifyFooter />
    </div>
  );
}
export default SpotifyApp;