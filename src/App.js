import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Singup from "./Pages/Signup/Signup";
import React, { useEffect, useContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import Institute from "./Pages/Institute/Institute";
import HomeRoute from "./RoutePage/HomeRoute";
import CollegeRoute from "./RoutePage/CollegeRoute";
import SchoolRoute from "./RoutePage/SchoolRoute";
import InvestorRoute from "./RoutePage/InvestorRoute";
import BookMarkRoute from "./RoutePage/BookMarkRoute";

function App() {
  return (
    <SkeletonTheme baseColor="#d3d3d3" highlightColor="#e3e3d3">
      <Router>
        <div>
          <div style={{ position: "sticky", top: "0", zIndex: "1" }}></div>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/college" element={<CollegeRoute />} />
            <Route path="/school" element={<SchoolRoute />} />
            <Route path="/colleges/:collegeName" element={<Institute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Singup />} />
            <Route path="/investor" element={<InvestorRoute />} />
            <Route path="/bookmarks" element={<BookMarkRoute />} />
          </Routes>
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
