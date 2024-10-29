import { useState } from 'react';
import './App.css'

import GeoCoding from './GeoCoding'
function App() {


  

  return (
      <>
        <header>
          <GeoCoding />
        </header>
        <main>
          <div className='divider'></div>
          <div className='genContainer'>
            <div className='transportCont'>
              <h2>TRANSPORT DEPARTURES</h2>
            </div>
            <div className='localCont'>
              <h2>LOCAL WEATHER</h2>
            </div>
            <div className='trafficCont'>
              <h2>TRAFFIC UPDATES</h2>
            </div>
          </div>
        </main>
      </>
  )
}

export default App
