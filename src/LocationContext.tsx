// LocationContext.tsx

import React, { createContext, useState, ReactNode } from "react";

type Location = {
  latitude: number | null;
  longitude: number | null;
};

type LocationContextType = {
  location: Location;
  setLocation: (location: Location) => void;
};

// Create context with a default value
export const LocationContext = createContext<LocationContextType>({
  location: { latitude: null, longitude: null },
  setLocation: () => {},
});

type LocationProviderProps = {
  children: ReactNode;
};

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
