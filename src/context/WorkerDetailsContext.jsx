import { createContext, useContext, useState } from "react";

const WorkerDetailsContext = createContext();

export const useWorkerDetails = () => useContext(WorkerDetailsContext);

export const WorkerDetailsProvider = ({ children }) => {
  const [workerDetails, setWorkerDetails] = useState(null);

  const setDetails = (details) => {
    setWorkerDetails(details);
  };

  return (
    <WorkerDetailsContext.Provider value={{ workerDetails, setDetails }}>
      {children}
    </WorkerDetailsContext.Provider>
  );
};
