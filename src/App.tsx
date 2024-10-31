import { useContext, useEffect } from "react";
import "./App.css";
import { Weather } from "./Components/Weather";
import { Departures } from "./Departures";
import GeoCoding from "./GeoCoding";
import GoogleMap from "./GoogleMap";
import { LocationContext } from "./LocationContext";
import { Traffic } from "./Traffic";

function App() {
  const { location } = useContext(LocationContext);

  useEffect(() => {}, [location]);

  return (
    <>
      <header>
        <GeoCoding />
      </header>
      <main>
        <div className="divider"></div>
        {location.latitude && location.longitude ? (
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
        ) : (
          <p>Please enter an address to see nearby information.</p>
        )}
      </main>
    </>
  );
}

export default App;
