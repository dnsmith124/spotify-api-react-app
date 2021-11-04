import React from "react";
import { useDataLayerValue } from '../../DataLayer';
import "./sidebar-option.scss";

const SpotifySidebarOption = ({ title, Icon, id }) => {

  const [{ currentPlaylist }, dispatch] = useDataLayerValue();

  const handleClick = () => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST_ID",
      currentPlaylistID: id,
    });
  }
  return (
    <div className="spotify-sidebar-option">
      {Icon && <Icon className="spotify-sidebar-option__icon" />}
      <button onClick={handleClick}><h4>{title}</h4></button>
    </div>
  );
}

export default SpotifySidebarOption;