import React from "react";
import "./spotify-sidebar.scss";
import SpotifySidebarOption from "./SpotifySidebarOption";
import { useDataLayerValue } from "../../DataLayer";
import spotifyLogo from './SpotifyLogo.png';

function SpotifySidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="spotify-sidebar">
      <img
        className="spotify-logo"
        src={spotifyLogo}
        alt="Spotify logo"
      />

      {/* <SpotifySidebarOption title="Home" Icon={HomeIcon} />
      <SpotifySidebarOption title="Search" Icon={SearchIcon} />
      <SpotifySidebarOption title="Your Library" Icon={LibraryMusic} /> */}
      <br />
      <h5 className="spotify-sidebar__title"><strong >PLAYLISTS</strong></h5>
      <hr />
      <div className="spotify-sidebar__options">
        {playlists?.items?.map((playlist) => (
          <SpotifySidebarOption title={playlist.name} id={playlist.id} />
        ))}
      </div>
    </div>
  );
}

export default SpotifySidebar;