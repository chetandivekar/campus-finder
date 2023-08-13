import { createContext, useContext, useEffect, useState } from "react";
// import colleges from "../Pages/College/college_api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [colleges, setColleges] = useState([]);
  const host = process.env.REACT_APP_HOST;
  const port = process.env.REACT_APP_PORT;

  useEffect(() => {
    fetch(`http://${host}:${port}/api/colleges`)
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  return <AppContext.Provider value={colleges}>{children}</AppContext.Provider>;
};

//custom Hook

const useCollegeContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useCollegeContext };
