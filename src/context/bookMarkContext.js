import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

// Create a new context
const BookmarkContext = createContext();

// Create a context provider to wrap components that need access to the context value
export const BookmarkProvider = ({ children }) => {
  const [bookMarkLength, setBookMarkLength] = useState(0);
  const [bookmarkcollege, setBookMarkCollege] = useState([]);
  const [bookMarkId, setsetBookMarkId] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    fetch("https://testcampus-finder.onrender.com/api/collegecart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((response) => response.jsn())
      .then((data) => {
        if (data.success) {
          setBookMarkCollege(data.savedColleges);
          setsetBookMarkId(data);
          setBookMarkLength(bookmarkcollege.length);
        } else {
          // Handle the case where data.success is false (API call was not successful)
          console.error("Error fetching bookmarked colleges");
        }
      })
      .catch((error) => {
        console.error("Error fetching bookmarked colleges:", error);
      });
  }, []);

  useEffect(() => {
    setBookMarkLength(bookmarkcollege.length);
  }, [bookmarkcollege]);

  return (
    <BookmarkContext.Provider
      value={{ bookMarkLength, setBookMarkLength, bookMarkId }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom hook to access the context value
export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};
