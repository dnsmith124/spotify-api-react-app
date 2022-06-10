import React, { useEffect } from 'react';
import SpotifyLogin from '../SpotifyLogin/SpotifyLogin';
import SpotifyApp from '../SpotifyApp/SpotifyApp';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from '../../../DataLayer';
import "./spotify.scss";

const spotify = new SpotifyWebApi();

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "cbde493d58af43a6b6352ce37fe428d0";

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const Spotify = () => {

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists({limit:50}).then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="spotify-window">
      <div className="container-xxl">
        {token 
          ? <SpotifyApp spotify={spotify} /> 
          : <SpotifyLogin loginUrl={loginUrl} />}
      </div>
    </div>
  );
}

export default Spotify;