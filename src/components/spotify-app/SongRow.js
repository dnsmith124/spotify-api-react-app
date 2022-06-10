
import React from "react";
import "./song-row.scss";

function SongRow({ track }) {

  return (
    <a href={track?.external_urls["spotify"]} className="song-row" target="_blank" rel="noreferrer">
      <img src={track.album.images[0].url} alt="" className="song-row__album" />
      <div className="song-row__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist, i) => {return <span key={i}>{artist.name}</span>}).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </a>
  );
}

export default SongRow;