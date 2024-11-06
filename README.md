# Overview
The Local Travel & Weather Dashboard is an interactive tool that allows users to enter their address and instantly view relevant information, including:
Nearby public transport departures
- Local weather updates
- Traffic incidents in the area
- Google Map Location

# Features
- Search by Address: Users enter their address to view nearby public transport, weather, and traffic incidents.
- Real-Time Updates: Retrieves and displays live data from external APIs to ensure the latest information.

# Installation 
### For End-Users:

This is a portal-based application. End-users can simply navigate to the web portal and start using the search functionality immediately.

### For Developers:

To run the project locally and explore the code, follow these steps:
- Clone the repository: 
  git clone https://github.com/your-repository/local-travel-weather-dashboard.gitcd local-travel-weather-dashboard
- Install dependencies:
  - Make sure you have Node.js and npm installed. 
  - Run the following command to install the required packages:
    npm install
- Key dependencies include:
  - axios: Middleware for handling API requests.
  - react and react-dom: Core libraries for building the user interface.
  - typescript: For type safety and enhanced development experience.
- Set up API keys:
  - Obtain API keys for the following services:
    - Trafikverket API (for transport and traffic data)
    - OpenWeather API (for weather data)
    - Google Geocoding API (for address-to-coordinates conversion)
    - Google Map AP(for map)
    Add these keys to an .env file in the root directory:
    REACT_APP_TRAFIKVERKET_API_KEY=your_trafikverket_api_key
    REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
    REACT_APP_GOOGLE_GEOCODING_API_KEY=your_google_geocoding_api_key
    REACT_APP_GOOGLE_MAP_API_KEY=your_google_MAP_api_key
- Run the application:
  Node server.js 
  npm start
This will start the development server and the application will be accessible at http://localhost:5173 .

# Technologies Used:

### Frontend : 
    - React (with functional components and hooks)
    - TypeScript for strong type support and component safety

### APIs: 
    - Trafikverket API (transport and traffic data)
    - OpenWeather API (weather data)
    - Google Geocoding API (for geolocation services)
    - Google Map API ( for Map)

### Middleware: 
    - Axios (for managing HTTP requests and responses)
    
### Development Methodology: 
    - Agile approach, using a GitHub project dashboard for task tracking and collaboration.

### Version Control : 
    - Git

# Contributors
  ### Gloria Morales
  ### Liam Andersson
  ### Madhuri Rao
  ### Suresh Balaraman
