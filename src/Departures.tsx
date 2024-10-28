import axios from "axios";
import { useEffect, useState } from "react";

export const Departures = () => {
  const [departures, setDepartures] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api/departures");

    console.log(response.data);
    setDepartures(response.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(departures);

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
          <td>here goes the content</td>
        </tbody>
      </table>
    </div>
  );
};
