import axios from "axios";
import { useEffect, useState } from "react";

function DisplayTrafficInfo(props) { 
  if (props.trafficData !== null) { 
    return (
      <div>
       
        <table>
          <tr>
          <th>Road Number</th>
          <th>Address</th>
          <th>Cause</th>
          </tr>

          {props.trafficData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.RoadNumber}</td>
                <td>{item.LocationDescriptor}</td>
                <td>{item.TrafficRestrictionType}</td>
       
              </tr>
            );
          })}
        </table>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export const Traffic = () => {
  const [traffic, setTraffic] = useState(null); // Traffic is an array of objects

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:3000/api/traffic");
                                  

    console.log(response.data);
    setTraffic(response.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(traffic);

  return (
    <div className="traffic">
      <h2>Traffic Updatesggg</h2>
      <DisplayTrafficInfo trafficData={traffic} />
      
      
  

  
    </div>
  );
};