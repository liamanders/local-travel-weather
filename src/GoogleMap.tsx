import { useState, useEffect } from "react";
import { APIProvider, Map, Pin, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";


// interface GoogleMapProps {
//     lat: number;
//     lng: number;
//   }


  export default  function GoogleMap({ lat, lng }: { lat: number; lng: number }) {
    const position = { lat, lng };
    const [open, setOpen] = useState(false);  
    // const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; 

   
return (

    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={import.meta.env.VITE_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
             
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
             
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>

  );
}
