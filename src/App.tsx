import "./App.css";
import { Departures } from "./Departures";
import GeoCoding from "./GeoCoding";
import { LocationProvider } from "./LocationContext";

function App() {
  return (
    <LocationProvider>
      <header>
        <div className="logo"></div>
        <div className="title">
          <h1>Local, Travel and Weather</h1>
        </div>
        <div className="searchBar">
          <form className="search-form">
            <input type="search" placeholder="Enter Your Address" required />
            <button type="submit">
              SEARCH &nbsp; <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </header>
      <main>
        <div className="divider"></div>
        <div className="genContainer">
          <div className="transportCont">
            <Departures />
          </div>
          <div className="localCont">
            <h2>LOCAL WEATHER</h2>
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
