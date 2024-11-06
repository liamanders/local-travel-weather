import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./Departures.css";
import { LocationContext } from "./LocationContext";

type Departure = {
  stop: string;
  direction: string;
  directionFlag: string;
  time: string;
  stopExtId: string;
  Product: {
    catIn: string;
  }[];
};

export const Departures = () => {
  const { location } = useContext(LocationContext);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true); // Step 2: Set loading to true before fetching data

      // Check if location has latitude and longitude
      if (!location || !location.latitude || !location.longitude) {
        console.error("Latitude and longitude are required");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/api/departures`,
          {
            params: {
              latitude: location.latitude,
              longitude: location.longitude,
            },
          }
        );

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

    fetchApi();
  }, [location]); // Refetch data if location changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(departures) || departures.length === 0) {
    return (
      <div>
        No available departures at this location, please check other nearby
        locations.
      </div>
    );
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

  console.log(departures);

  return (
    <div className="departures">
      <h2>Transport Departures</h2>
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
          {departures.map((departure) => (
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
