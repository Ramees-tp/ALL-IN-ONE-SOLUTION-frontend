import { createContext, useContext, useState } from "react";

const WorkerDetailsContext = createContext();

export const useWorkerDetails = () => useContext(WorkerDetailsContext);

export const WorkerDetailsProvider = ({ children }) => {
  const [workerDetails, setWorkerDetails] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const setDetails = (details) => {
    setWorkerDetails(details);
  };

  const updateUserLocation = (location) => {
    setUserLocation(location);
  };

  return (
    <WorkerDetailsContext.Provider value={{ workerDetails, setDetails, userLocation, updateUserLocation }}>
      {children}
    </WorkerDetailsContext.Provider>
  );
};
