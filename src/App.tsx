import { useState } from 'react';
import './App.css'
import logo from './assets/logo.png'

function App() {

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);

  
  
    const handleGeocode  = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(async () => {
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
      } finally {
        setLoading(false);
      }
    }, 1000);
    }; 

  

  return (
      <>
        <header>
          <div className='logo'>
            <img className= 'logoImg' src= {logo} alt="Logo" />
          </div>
          <div className='title'>
            <h1><span className='local'>Local, </span><span className='travel'>Travel and Weather</span></h1>
          </div>
          <div className='searchBar'>
            <form className="search-form" onSubmit={handleGeocode}>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" required/>
              <button type='submit'
              disabled={loading}>{loading ? 'Loading ...' : 'SEARCH'} <i className="fa fa-search"></i></button>
              <h3>{coordinates && (
              <p>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</p>
                )}</h3>
            </form>
          </div>
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
