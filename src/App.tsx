import './App.css'
import {Traffic} from "./traffic";
import GoogleMap from "./GoogleMap";

function App() 
  {
    
  return (
    <>
      <body>
        <header>
          <div className='logo'>

          </div>
          <div className='title'>
            <h1>Local, Travel and Weather</h1>
          </div>
          <div className='searchBar'>
            <form className="search-form">
              <input type="search" placeholder="Enter Your Address" required/>
              <button type="submit">SEARCH &nbsp; <i className="fa fa-search"></i></button>
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
              <Traffic/>
              <GoogleMap lat={53.42} lng={10} />   {/* Hardcoding some valyes*/}
                       </div>
          </div>
        </main>
      </body>
    </>
  )
}

export default App
