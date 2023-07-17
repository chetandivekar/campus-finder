import { createContext, useContext } from "react";
import colleges from "../Pages/College/college_api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={colleges}>{children}</AppContext.Provider>;
};

//custom Hook

const useCollegeContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useCollegeContext };
