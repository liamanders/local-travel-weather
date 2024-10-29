
import { useState } from 'react';

import "./App.css";
import { Departures } from "./Departures";
import GeoCoding from './GeoCoding'


function App() {



  


  return (
    <>
      <header>
        <div className="logo"></div>
        <div className="title">
          <h1>Local, Travel and Weather</h1>
        </div>
        <GeoCoding />
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
    </>
  );

}

export default App;
