import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);

  const updateUserLocation = (location) => {
    setUserLocation(location);
  };

  return (
    <UserContext.Provider value={{ userLocation, updateUserLocation }}>
      {children}
    </UserContext.Provider>
  );
};
