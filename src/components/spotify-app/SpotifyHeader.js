import React from "react";
import "./spotify-header.scss";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

function SpotifyHeader() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default SpotifyHeader;