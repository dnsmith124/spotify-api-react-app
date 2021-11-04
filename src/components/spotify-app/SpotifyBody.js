import React, { useEffect } from "react";
import "./spotify-body.scss";
import SpotifyHeader from "./SpotifyHeader";
import { useDataLayerValue } from "../../DataLayer";
import SongRow from "./SongRow";

function SpotifyBody({ spotify }) {
  const [{ currentPlaylist, currentPlaylistID, token }, dispatch] = useDataLayerValue();

  useEffect(() => { 
    spotify.getPlaylist(currentPlaylistID).then((playlist) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        currentPlaylist: playlist,
      });
    });
    console.log(currentPlaylist);
  }, [currentPlaylistID]);

  return (
    <div className="spotify-body">
      <SpotifyHeader spotify={spotify} />

      {currentPlaylist != null
        ? <div className="spotify-body__container">
            <div className="spotify-body__current-playlist">
              <img src={currentPlaylist?.images[0]?.url} alt=""  className="spotify-body__current-playlist__image"/>
              <div className="spotify-body__current-playlist__list">
                <h2><a href={currentPlaylist?.external_urls["spotify"]} target="_blank">{currentPlaylist?.name}</a></h2>
                <p>{currentPlaylist?.description}</p>
              </div>
            </div>
            <div className="spotify-body__songs">
              {currentPlaylist?.tracks.items.map((item) => (
                <SongRow track={item.track} />
              ))}
            </div>
          </div>
        : <h2>No Playlist Selected</h2>  }

      {/* <div className="spotify-body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="spotify-body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="spotify-body__songs">
        <div className="spotify-body__icons">
          <PlayCircleFilled className="spotify-body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div> */}
    </div>
  );
}

export default SpotifyBody;