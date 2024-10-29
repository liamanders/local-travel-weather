import "./App.css";
import logo from "./assets/logo.png";
import { Weather } from "./Components/Weather";
import GeoCoding from "./GeoCoding";
import { Departures } from "./Departures";
import {Traffic} from "./traffic";
import GoogleMap from "./GoogleMap";

function App() {

  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img className="logoImg" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="title">
            <h1>
              <span className="local">Local, </span>
              <span className="travel">Travel and Weather</span>
            </h1>
          </div>
        </div>
        <GeoCoding />
      </header>
      <main>
        <div className="divider"></div>
        <div className="genContainer">
          <div className="transportCont">
            <Departures />
          </div>
          <div className="app">
            <Weather />
            </div>
          
            <div className='traffic-map-container'>
              <div className='traffic'>
                <Traffic />
              </div>
              <div className='google-map'>
                <GoogleMap lat={53.42} lng={10} />
              </div>
            </div>
          </div>
         
       </main>
    </>
  );
}

export default App;
