import "./App.css";
import { Weather } from "./Components/Weather";
import { Departures } from "./Departures";
import GeoCoding from "./GeoCoding";
import { LocationProvider } from "./LocationContext";

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
            <h2>TRAFFIC UPDATES</h2>
          </div>
        </div>
      </main>
    </LocationProvider>
  );
}

export default App;
