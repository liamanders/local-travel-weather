import { useState } from 'react';
import './App.css'
import logo from './assets/logo.png'

function geoCoding() {

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalidErr, setInvalidErr] = useState('');

  
  
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
        if (!response.ok) {
          throw new Error('Invalid address');
        } 
        const data = await response.json();
        setCoordinates(data);
        setInvalidErr('');
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        if (error) setInvalidErr('Invalid Address! Please enter a valid address.');
      } finally {
        setLoading(false);
      }
    }, 1000);
    }; 

  

  return (
      <>
      {loading && (
          <div className="loading-overlay">
            <img src={logo} className='loadingLogo' alt="Loading Logo" />
            <h2>Loading...</h2>
          </div>
        )}
        <header>
          <div className='searchBar'>
            <form className="search-form" onSubmit={handleGeocode}>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" required/>
              <button type='submit'
              disabled={loading}>{loading ? 'Loading ...' : 'SEARCH'} <i className="fa fa-search"></i></button>
              <h3>{invalidErr}</h3>
              <h3>{coordinates &&
              (
              <p>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</p>
                )}</h3>
            </form>
          </div>
        </header>
      </>
  )
}

export default geoCoding
