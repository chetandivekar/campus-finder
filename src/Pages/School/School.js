
import React, { useEffect, useState } from "react";

import React, { useState, useEffect } from "react";

import "../School/School.css";
import "../Home/components/Hero/Hero.css";
import "../School/School.css";
import Clear from "../College/collegeImages/clear.svg";
import usePageTitle from "../layout/metaData";
import Search from "../College/collegeImages/search.svg";
import { Link } from "react-router-dom";
const School = () => {
  // page title
  const pageTitle = "Schools | campusFinder";
  usePageTitle(pageTitle);
  useEffect(() => {
    fetch("http://localhost:5000/api/school")
      .then((response) => response.json())
      .then((data) => setSchool(data))
      .catch((error) => console.error("Error fetching Schools:", error));
  }, []);
  const [School, setSchool] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [selectedBoard, setselectedBoard] = useState("");
  const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(true);

  const [isBoadrExpanded, setIsBoadrExpanded] = useState(true);
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4080/api/school")
      .then((response) => response.json())
      .then((data) => setSchools(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const [isBoardExpanded, setisBoardExpanded] = useState(true);
  const [FilteredSchool, setFilteredSchool] = useState(School);
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(School);
  
  console.log(School.fees);
  // useEffect(() => {
  //   setFilteredSchool(School || []);
  // }, [School]);
  useEffect(() => {
    // Filtering logic here...
    let filtered = School || [];

    // ... (Your filtering logic)

    // Update the filteredSchool state with the filtered results
    setFilteredSchool(filtered);
  }, [School]);
console.log("filtered " , FilteredSchool);

  const filterSchools = () => {
    console.log("schol" + School);
    let filtered = School || [];
    console.log(filtered);
  
    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(
        (school) =>
          school.location &&
          school.location.city &&
          school.location.city.toLowerCase() === selectedLocation.toLowerCase()
      );
    }
  
    //Filter by ownership
    if (selectedOwnership.length > 0) {
      filtered = filtered.filter((school) => {
        const typeOfSchool = school.type_Of_school && school.type_Of_school[0];
        return typeOfSchool && typeOfSchool.toLowerCase() === selectedOwnership.toLowerCase();
      });
    }
  
    // Filter by search query
    if (searchQuery.length > 0) {
      filtered = filtered.filter((school) =>
        school.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    setFilteredSchool(filtered);
  
  };
  // console.log(`filtered ${FilteredSchool}`);
  // console.log(JSON.stringify(FilteredSchool, null, 2));

  useEffect(() => {
    filterSchools();
  }, [selectedLocation, selectedFees, selectedOwnership]);


  const handleFeesChange = (event) => {
    const { value } = event.target;
    setSelectedFees((prevSelected) => (prevSelected === value ? "" : value));
  };


  const handleLocationChange = (event) => {
    const { value } = event.target;
    setSelectedLocation((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const handleOwnershipChange = (event) => {
    const { value } = event.target;
    setSelectedOwnership((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };


  const handleBoardChange = (event) => {
    const { value } = event.target;
    setselectedBoard((prevSelected) => 
    (prevSelected === value ? "" : value));
  };

  const toggleOwnershipExpand = () => {
    setIsOwnershipExpanded((prevState) => !prevState);
  };

  const toggleLocationExpand = () => {
    setIsLocationExpanded((prevState) => !prevState);
  };

  const toggleFeesExpand = () => {
    setIsFeesExpanded((prevState) => !prevState);
  };

  const toggleBoardExpand = () => {
    setisBoardExpanded((prevState) => !prevState);
  };
  const renderSelectedFilters = () => {
    const selectedFilters = [];

    if (selectedOwnership) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedOwnership("")}
          key="ownership"
        >
          {selectedOwnership}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedLocation) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => {
            setSelectedLocation("");
          }}
          key="location"
        >
          {selectedLocation}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedFees) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedFees("")}
          key="fees"
        >
          {selectedFees}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedBoard) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setselectedBoard("")}
          key="specialization"
        >
          {selectedBoard}
          <span className="clear-option">x</span>
        </span>
      );
    }


    return selectedFilters.length > 0 ? (
      selectedFilters
    ) : (
      <div>No filters selected.</div>
    );
  };

  const clearAll = () => {
    setSelectedLocation("");
    setSelectedOwnership("");
    setSelectedFees("");
    setselectedBoard("");
    setIsOwnershipExpanded(true);
    setIsLocationExpanded(true);
    setIsFeesExpanded(true);
    setisBoardExpanded(true);
    setFilteredSchool(School || []);
  };

  return (
    <div>
      <div className="main">
      <div className="school-component">
        <div className="school-filter">
          <div className="filter-component">
            <div className="filter-text">
              <div className="text">FILTERS</div>

              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedBoard ? (
                <div onClick={clearAll} className="clear-filters">
                  <div className="clear-button">
                    <div className="clear-text">Clear All</div>
                    <div className="clear-png">
                      <img src={Clear} alt="" />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="selected-filters">
              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedBoard ? (
                <div className="selected-filter">
                  <p>Selected Filter</p>
                  <div className="selected-filter-filters">
                    {renderSelectedFilters()}
                  </div>
                </div>
              ) : (
                <div className="no-filters">No filters selected.</div>
              )}
            </div>
              <div className="filters">
                <div className="ownership">
                  <div
                    className={`dropdown ${
                      isOwnershipExpanded ? "expanded" : ""
                    }`}
                  >
                    <label htmlFor="ownership">Ownership:</label>
                    <div>
                      <button
                        className="toggle-button"
                        onClick={toggleOwnershipExpand}
                      >
                        {isOwnershipExpanded ? "▲" : "▼"}
                      </button>
                      {isOwnershipExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="public"
                              name="ownership"
                              value="Public"
                              checked={selectedOwnership === "Public"}
                              onChange={handleOwnershipChange}
                            />
                            <label htmlFor="public" className="checkbox-label">
                              Public
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="private"
                              name="ownership"
                              value="Private"
                              onClick={filterSchools}
                              checked={selectedOwnership === "Private"}
                              onChange={handleOwnershipChange}
                            />
                            <label htmlFor="private" className="checkbox-label">
                              Private
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="location">
                  <div>
                    <div
                      className={`dropdown ${
                        isLocationExpanded ? "expanded" : ""
                      }`}
                    >
                      <label htmlFor="location">Location:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleLocationExpand}
                        >
                          {isLocationExpanded ? "▲" : "▼"}
                        </button>
                        {isLocationExpanded && (
                          <div className="options">
                            <div className="option">
                              <input
                                type="checkbox"
                                id="mumbai"
                                name="location"
                                value="Mumbai"
                                checked={selectedLocation === "Mumbai"}
                                onChange={handleLocationChange}
                              />
                              <label
                                htmlFor="mumbai"
                                className="checkbox-label"
                              >
                                Mumbai
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Vasai"
                                name="location"
                                value="Vasai"
                                checked={selectedLocation === "Vasai"}
                                onChange={handleLocationChange}
                              />
                              <label htmlFor="Vasai" className="checkbox-label">
                                Vasai
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Virar"
                                name="location"
                                value="Virar"
                                checked={selectedLocation === "Virar"}
                                onChange={handleLocationChange}
                              />
                              <label htmlFor="Virar" className="checkbox-label">
                                Virar
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="fees">
                  <div>
                    <div
                      className={`dropdown ${isFeesExpanded ? "expanded" : ""}`}
                    >
                      <label htmlFor="fees">Fees:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleFeesExpand}
                        >
                          {isFeesExpanded ? "▲" : "▼"}
                        </button>
                        {isFeesExpanded && (
                          <div className="options">
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-1"
                                name="fees"
                                value="below 10K"
                                checked={selectedFees === "below 10K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-1"
                                className="checkbox-label"
                              >
                                below 10K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-2"
                                name="fees"
                                value="10K - 30K"
                                checked={selectedFees === "10K - 30K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-2"
                                className="checkbox-label"
                              >
                                10K - 30K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-3"
                                name="fees"
                                value="30K - 50K"
                                checked={selectedFees === "30K - 50K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-3"
                                className="checkbox-label"
                              >
                                30K - 50K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-4"
                                name="fees"
                                value="50K - 70K"
                                checked={selectedFees === "50K - 70K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-4"
                                className="checkbox-label"
                              >
                                50K - 70K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-5"
                                name="fees"
                                value="70K - 1L"
                                checked={selectedFees === "70K - 1L"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-5"
                                className="checkbox-label"
                              >
                                70K - 1L
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="specialization">
                  <div>
                    <div
                      className={`dropdown ${
                        isBoardExpanded ? "expanded" : ""
                      }`}
                    >
                      <label htmlFor="specialization">Board:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleBoardExpand}
                        >
                          {isBoardExpanded ? "▲" : "▼"}
                        </button>
                        {isBoardExpanded && (
                          <div className="options">
                            <div className="option">
                              <input
                                type="checkbox"
                                id="State Board"
                                name="specialization"
                                value="State Board"
                                checked={selectedBoard === "State Board"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="State Board" className="checkbox-label">
                              State Board
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="ICSE"
                                name="specialization"
                                value="ICSE"
                                checked={selectedBoard === "ICSE"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="ICSE" className="checkbox-label">
                                ICSE
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="CBSC"
                                name="specialization"
                                value="CBSC"
                                checked={selectedBoard === "CBSC"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="CBSC" className="checkbox-label">
                                CBSC
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="SSC"
                                name="specialization"
                                value="SSC"
                                checked={selectedBoard === "SSC"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="SSC" className="checkbox-label">
                                SSC
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Other"
                                name="specialization"
                                value="Other"
                                checked={selectedBoard === "Other"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="Other" className="checkbox-label">
                                Other
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="school-main">
            <div className="search">
            <div className="heading">Search school</div>
            <div className="inputs">
              <div>
                <img src={Search} alt="" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    filterSchools();
                  }
                }}
                placeholder="Search..."
              />
              <button onClick={filterSchools}>Search</button>
            </div>
          </div>
            <div className="school-list">
            {FilteredSchool.length > 0 ? (
              FilteredSchool.map((School, index) => (
            <div class="school-card">
              <div class="rank">
                <div class="rank-ranks">{index + 1}</div>
                <div class="rank-ranking-institute">
                  <div>NIRF '23</div>
                  <div>(All India)</div>
                </div>
              </div>
              <div class="image">
                <img
                  src="https://images.shiksha.com/mediadata/images/1605086820phpSFQlAR.jpg  "
                  alt="School_logo"
                />
              </div>
              <div class="collge-info">
              <Link to={`#`}>
                  <div class="collge-name">{School.name}</div>
                  </Link>
                <div class="info-two">
                  <div class="locations">
                    <div class="img">
                      <img
                        src="/static/media/location.c158d9fd56fc42a0845ff70178f1a02d.svg"
                        alt="location"
                      />
                    </div>
                    <div class="address">{School.location.city}</div>
                  </div>
                  <div class="verticalline">|</div>
                  <div class="rating">
                    <div class="rate">3.1666666666666665</div>
                    <div class="star-rating">
                      <span class="star"></span>
                      <span class="star"></span>
                      <span class="star"></span>
                    </div>
                  </div>
                  <div class="verticalline">|</div>
                  <div class="School-fees">
                    <span>Fees:</span> {School.fees}
                  </div>
                </div>
                <div class="info-three">
                  <div class="salary">
                    <span>Ownership:</span> {School.type_Of_school}
                  </div>
                </div>
                <div class="info-four">
                  <div class="admission">
                    <a href="/Schools/Indian Institute of Technology Bombay">
                      Admission
                    </a>
                  </div>
                  <div class="dot">
                    <img
                      src="/static/media/dot.3ee289e691f42e4e0c9708dce5716bbe.svg"
                      alt="dot"
                    />
                  </div>
                  <a href="/Schools/Indian Institute of Technology Bombay">
                    Courses &amp; Fees
                  </a>
                  <div class="dot">
                    <img
                      src="/static/media/dot.3ee289e691f42e4e0c9708dce5716bbe.svg"
                      alt="dot"
                    />
                  </div>
                </div>
              </div>
            </div>
            ))
            ) : (
              <p>No colleges found.</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
