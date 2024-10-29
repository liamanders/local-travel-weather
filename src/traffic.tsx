import axios from "axios";
import { useEffect, useState } from "react";
import './traffic.css';

// Defining data structure for traffic information 
interface TrafficData{
  RoadNumber : string;
  LocationDescriptor : string;
  TrafficRestrictionType: string;
}

interface DisplayTrafficInfoProps {
  trafficData: TrafficData[] | null;
}

//Conditionally rendering traffic data in a table or showing a loading... message if data is unavailable.
function DisplayTrafficInfo({ trafficData }: DisplayTrafficInfoProps) { 
  if (trafficData !== null) { 
    return (
      <div>
        <table className="traffic-table">
          <thead>
          <tr>
          <th>Road Number</th>
          <th>Address</th>
          <th>Cause</th>
          </tr>
          </thead>
          <tbody>
            {trafficData.map((item, index) => (
              <tr key={index}>
                <td>{item.RoadNumber}</td>
                <td>{item.LocationDescriptor}</td>
                <td>{item.TrafficRestrictionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
//Initialize state to store traffic data, initially set to null
// Defining the API fetch function.
//Automatically fetching traffic data when the component is mounted via useEffect
export const Traffic = () => { //
  const [traffic, setTraffic] = useState<TrafficData[] | null>(null); // Traffic is an array of objects

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/traffic");
      console.log(response.data);
      setTraffic(response.data);
    } catch (error) {
      console.error("Error fetching traffic data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Traffic component renders  traffic update section 
  //and passes the fetched traffic data to the DisplayTrafficInfo component for display.
  return (
    <div className="traffic">
      <h2>Traffic Updates</h2>
      <DisplayTrafficInfo trafficData={traffic} />
    </div>
  );
};