import React from "react";
import "./spotify-app.scss";
import SpotifyBody from "./SpotifyBody";
import SpotifySidebar from "./SpotifySidebar";
import SpotifyFooter from "./SpotifyFooter";

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