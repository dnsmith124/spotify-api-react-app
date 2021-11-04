
import React, { useEffect } from "react";
import "./song-row.scss";

function SongRow({ track }) {

  return (
    <a href={track?.external_urls["spotify"]} className="song-row" target="_blank">
      <img src={track.album.images[0].url} alt="" className="song-row__album" />
      <div className="song-row__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </a>
  );
}

export default SongRow;