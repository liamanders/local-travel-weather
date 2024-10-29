
import { useState } from 'react';
import { Departures } from "./Departures";
import './App.css'
import logo from './assets/logo.png'
 import React from 'react';
import Weather from './Components/Weather';

import GeoCoding from './GeoCoding'
import { Departures } from './Departures';

function App() {


  

  return (
      <>
        <header>
          <div className='header'>
            <div className="logo">
              <a href="/"><img className= 'logoImg' src= {logo} alt="Logo" /></a>
            </div>
            <div className="title">
              <h1><span className='local'>Local, </span><span className='travel'>Travel and Weather</span></h1>
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
            <div className="trafficCont">
              <h2>TRAFFIC UPDATES</h2>
            </div>
          </div>
      </main>
      </>
  );
};

export default App;
