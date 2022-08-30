import React, { useContext, useState } from "react";
// Data
import { Data } from "./data";

const AppContext = React.createContext();

const Provider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [jobs, setJobs] = useState(Data.slice(0, 9));
  const [searchMode, setSearchMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        jobs,
        setJobs,
        showModal,
        setShowModal,
        searchMode,
        setSearchMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useItGlobally = () => {
  return useContext(AppContext);
};

export default Provider;
