import './App.css';
import Spotify  from "./components/spotify-app/Spotify/Spotify";
import reducer,{ initialState } from './reducer';
import { DataLayer } from './DataLayer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <div className="App">
        <Spotify />
      </div>
    </DataLayer>
  );
}

export default App;
