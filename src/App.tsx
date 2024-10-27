import { useState } from 'react';
import { Departures } from "./Departures";
import './App.css'

function App() {

  const [address, setAddress] = useState('Sundsgårdens Folkhögskola');
  const [coordinates, setCoordinates] = useState(null);

  
  


    const handleGeocode  = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8080/geocode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address })
        });

        const data = await response.json();
        setCoordinates(data);
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

  

  return (
      <>
        <header>
          <div className='logo'>

          </div>
          <div className='title'>
            <h1>Local, Travel and Weather</h1>
          </div>
          <div className='searchBar'>
            <form className="search-form" onSubmit={handleGeocode}>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" required/>
              <button type='submit'>SEARCH &nbsp; <i className="fa fa-search"></i></button>
              <h3>{coordinates && (
              <p>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</p>
                )}</h3>
            </form>
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
        </main>
      </>
  );
};

export default App;
