import axios from "axios";
import { useEffect, useState } from "react";


import "./Departures.css";

export const Departures = () => {
  const [departures, setDepartures] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  const fetchApi = async () => {
    setLoading(true); // Step 2: Set loading to true before fetching data

    try {
      const response = await axios.get("http://localhost:8080/api/departures");
      // Ensure the response data is an array
      if (response.data && Array.isArray(response.data.departures)) {
        setDepartures(response.data.departures);
      } else {
        setDepartures([]);
        console.error("Response data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching departures:", error);
      setDepartures([]);
    } finally {
      setLoading(false); // Step 3: Set loading to false after data is fetched
    }

  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    // Step 4: Render loading status
    return <div>Loading...</div>;
  }

  if (!Array.isArray(departures) || departures.length === 0) {
    return <div>No departures available.</div>;
  }

  const transportTypes: { [key: string]: string } = {
    BLT: "Local bus",
    BRE: "Regional bus",
    BXB: "Express bus",
    BAX: "Airport Express bus",
    BBL: "Bus",
    BRB: "Replacement bus",
    FLT: "Lokal ferry",
    JAX: "Airport Express Train",
    JLT: "Local train",
    JRE: "Regional train",
    JIC: "InterCity train",
    JST: "High speed train",
    JEX: "Express train",
    JBL: "Train",
    JEN: "EuroNight train",
    JNT: "Night train",
    SLT: "Tram",
    TLT: "Taxi",
    ULT: "Metro",
  };

  function transportationType(type: string) {
    console.log(type);
    return transportTypes[type] || "Unknown";
  }

  function formatTime(time) {
    return time.slice(0, 5);
  }

  return (
    <div className="departures">
      <h2>TRANSPORT DEPARTURES</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Platform</th>
            <th>Time</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {departures.map((departure: any) => (
            <tr key={departure.stopExtId}>
              <td>{departure.stop}</td>
              <td>{departure.direction}</td>
              <td>{departure.directionFlag}</td>
              <td>{formatTime(departure.time)}</td>
              <td>{transportationType(departure.Product[0].catIn)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
