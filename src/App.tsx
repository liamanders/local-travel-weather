import "./App.css";
import { Weather } from "./Components/Weather";
import { Departures } from "./Departures";
import GeoCoding from "./GeoCoding";
import GoogleMap from "./GoogleMap";
import { LocationProvider } from "./LocationContext";
import { Traffic } from "./Traffic";

function App() {
  return (
    <LocationProvider>
      <header>
        <GeoCoding />
      </header>
      <main>
        <div className="divider"></div>
        <div className="genContainer">
          <div className="transportCont">
            <Departures />
          </div>
          <div className="localCont">
            <Weather />
          </div>
          <div className="trafficCont">
            <div className="traffic">
              <Traffic />
            </div>
            <div className="google-map">
              <GoogleMap />
            </div>
          </div>
        </div>
      </main>
    </LocationProvider>
  );
}

export default App;
