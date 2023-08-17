import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

// Create a new context
const SchoolBookmarkContext = createContext();

// Create a context provider to wrap components that need access to the context value
export const SchoolBookmarkProvider = ({ children }) => {
  const [bookmarkedSchools, setBookmarkedSchools] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    fetch("http://localhost:4080/api/schoolcart/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBookmarkedSchools(data.savedSchools);
        } else {
          console.error("Error fetching bookmarked schools");
        }
      })
      .catch((error) => {
        console.error("Error fetching bookmarked schools:", error);
      });
  }, []);

  return (
    <SchoolBookmarkContext.Provider value={{ bookmarkedSchools }}>
      {children}
    </SchoolBookmarkContext.Provider>
  );
};

// Custom hook to access the school bookmark context value
export const useSchoolBookmarkContext = () => {
  const context = useContext(SchoolBookmarkContext);
  if (!context) {
    throw new Error(
      "useSchoolBookmarkContext must be used within a SchoolBookmarkProvider"
    );
  }
  return context;
};
