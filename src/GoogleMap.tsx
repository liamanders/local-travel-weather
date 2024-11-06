import { useState, useEffect, useContext } from "react";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { LocationContext } from "./LocationContext";

export default function GoogleMap() {
  const { location } = useContext(LocationContext);

  const position = {
    lat: Number(location.latitude),
    lng: Number(location.longitude),
  };
  const [open, setOpen] = useState(false);
  // const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // console.log("Location from maps", location);
  }, [location]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "40vh", width: "100%" }}>
        <Map zoom={15} center={position} mapId={import.meta.env.VITE_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin background={"grey"} borderColor={"green"} />
          </AdvancedMarker>

          {open && (
            <InfoWindow
              position={position}
              onCloseClick={() => setOpen(false)}
            ></InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
