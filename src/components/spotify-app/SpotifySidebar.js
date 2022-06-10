import React from "react";
import "./spotify-sidebar.scss";
import SpotifySidebarOption from "./SpotifySidebarOption";
import { useDataLayerValue } from "../../DataLayer";
import spotifyLogo from './SpotifyLogo.png';

function SpotifySidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="spotify-sidebar">
      <img
        className="spotify-logo"
        src={spotifyLogo}
        alt="Spotify logo"
      />
      <br />
      <h5 className="spotify-sidebar__title"><strong >PLAYLISTS</strong></h5>
      <hr />
      <div className="spotify-sidebar__options">
        {playlists?.items?.map((playlist, i) => (
          <SpotifySidebarOption title={playlist.name} id={playlist.id} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SpotifySidebar;