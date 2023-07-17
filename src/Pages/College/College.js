import React, { useEffect, useState } from "react";
import "./College.css";
import Clear from "./collegeImages/clear.svg";
import Location from "./collegeImages/location.svg";
import Dot from "./collegeImages/dot.svg";
import Search from "./collegeImages/search.svg";
import { useCollegeContext } from "../../context/collegeContext";
import { Link } from "react-router-dom";

export default function College() {
  const colleges = useCollegeContext();

  // const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(true);
  const [isSpecializationExpanded, setIsSpecializationExpanded] =
    useState(true);
  const [isExamExpanded, setIsExamExpanded] = useState(true);
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [searchQuery, setSearchQuery] = useState("");
  // const filterColleges = () => {
  //   let filtered = colleges;

  //   if (selectedLocation.length > 0) {
  //     filtered = filtered.filter(
  //       (college) =>
  //         college.Location &&
  //         college.Location.toLowerCase().includes(
  //           selectedLocation.toLowerCase()
  //         )
  //     );
  //   }

  //   setFilteredColleges(filtered);
  // };

  // const handleLocationChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedLocation(value);
  // };

  // useEffect(() => {
  //   filterColleges();
  // }, [selectedLocation]);

  const filterColleges = () => {
    let filtered = colleges;

    // Filter by location
    if (selectedLocation.length > 0) {
      filtered = filtered.filter(
        (college) =>
          college.Location &&
          college.Location.toLowerCase().includes(
            selectedLocation.toLowerCase()
          )
      );
    }

    // Filter by fees range
    if (selectedFees.length > 0) {
      filtered = filtered.filter((college) => {
        if (college["Course Offered"]) {
          const courseFees = parseInt(
            college["Course Offered"][0].replace(/,/g, "")
          );
          const [lowerRange, upperRange] = selectedFees.split("-");

          if (selectedFees === "1 Lakh") {
            return courseFees < 100000;
          } else if (selectedFees === "6 Lakh") {
            return courseFees > 600000;
          } else if (upperRange) {
            return (
              courseFees >= parseInt(lowerRange) * 100000 &&
              courseFees <= parseInt(upperRange) * 100000
            );
          }
        }
        return false;
      });
    }

    //Filter by ownership
    if (selectedOwnership.length > 0) {
      filtered = filtered.filter(
        (college) =>
          college.Ownership &&
          college.Ownership.toLowerCase() === selectedOwnership.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.length > 0) {
      filtered = filtered.filter((college) =>
        college.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredColleges(filtered);
  };

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const handleFeesChange = (event) => {
    const { value } = event.target;
    setSelectedFees(value);
    console.log(value);
  };

  useEffect(() => {
    filterColleges();
  }, [selectedLocation, selectedFees, selectedOwnership]);

  const handleOwnershipChange = (event) => {
    const { value } = event.target;
    setSelectedOwnership(value);
    console.log(value);
  };

  // const handleOwnershipChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedOwnership((prevSelected) =>
  //     prevSelected === value ? "" : value
  //   );
  // };

  // const handleFeesChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedFees((prevSelected) => (prevSelected === value ? "" : value));
  // };

  const handleSpecializationChange = (event) => {
    const { value } = event.target;
    setSelectedSpecialization((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };

  const handleExamChange = (event) => {
    const { value } = event.target;
    setSelectedExam((prevSelected) => (prevSelected === value ? "" : value));
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

  const toggleSpecializationExpand = () => {
    setIsSpecializationExpanded((prevState) => !prevState);
  };

  const toggleExamExpand = () => {
    setIsExamExpanded((prevState) => !prevState);
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
          onClick={() => setSelectedLocation("")}
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

    if (selectedSpecialization) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedSpecialization("")}
          key="specialization"
        >
          {selectedSpecialization}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedExam) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedExam("")}
          key="exam"
        >
          {selectedExam}
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
    setSelectedSpecialization("");
    setSelectedExam("");
    setIsOwnershipExpanded(true);
    setIsLocationExpanded(true);
    setIsFeesExpanded(true);
    setIsSpecializationExpanded(true);
    setIsExamExpanded(true);
  };

  return (
    <div className="main">
      <div className="college-component">
        <div className="college-filter">
          <div className="filter-component">
            <div className="filter-text">
              <div className="text">FILTERS</div>

              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedSpecialization ||
              selectedExam ? (
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
              selectedSpecialization ||
              selectedExam ? (
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
                  <div>
                    <div className="filter-heading">
                      <label htmlFor="ownership">Ownership</label>
                      <button
                        className="toggle-button"
                        onClick={toggleOwnershipExpand}
                      >
                        {isOwnershipExpanded ? "▲" : "▼"}
                      </button>
                    </div>
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
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="location">Location:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleLocationExpand}
                        >
                          {isLocationExpanded ? "▲" : "▼"}
                        </button>
                      </div>
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
                            <label htmlFor="mumbai" className="checkbox-label">
                              Mumbai
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="pune"
                              name="location"
                              value="Pune"
                              checked={selectedLocation === "Pune"}
                              onChange={handleLocationChange}
                            />
                            <label htmlFor="pune" className="checkbox-label">
                              Pune
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="palghar"
                              name="location"
                              value="Palghar"
                              checked={selectedLocation === "Palghar"}
                              onChange={handleLocationChange}
                            />
                            <label htmlFor="palghar" className="checkbox-label">
                              Palghar
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
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="fees">Fees</label>
                        <button
                          className="toggle-button"
                          onClick={toggleFeesExpand}
                        >
                          {isFeesExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isFeesExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-1"
                              name="fees"
                              value="1 Lakh"
                              checked={selectedFees === "1 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-1" className="checkbox-label">
                              &lt; 1 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-2"
                              name="fees"
                              value="1-2 Lakh"
                              checked={selectedFees === "1-2 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-2" className="checkbox-label">
                              1-2 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-3"
                              name="fees"
                              value="2-3 Lakh"
                              checked={selectedFees === "2-3 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-3" className="checkbox-label">
                              2-3 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-4"
                              name="fees"
                              value="3-5 Lakh"
                              checked={selectedFees === "3-5 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-4" className="checkbox-label">
                              3-5 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-5"
                              name="fees"
                              value="6 Lakh"
                              checked={selectedFees === "6 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-5" className="checkbox-label">
                              &gt; 6 Lakh
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
                      isSpecializationExpanded ? "expanded" : ""
                    }`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="specialization">Specialization:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleSpecializationExpand}
                        >
                          {isSpecializationExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isSpecializationExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="computer"
                              name="specialization"
                              value="Computer"
                              checked={selectedSpecialization === "Computer"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="computer"
                              className="checkbox-label"
                            >
                              Computer
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="mechanical"
                              name="specialization"
                              value="Mechanical"
                              checked={selectedSpecialization === "Mechanical"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="mechanical"
                              className="checkbox-label"
                            >
                              Mechanical
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="electrical"
                              name="specialization"
                              value="Electrical"
                              checked={selectedSpecialization === "Electrical"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="electrical"
                              className="checkbox-label"
                            >
                              Electrical
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="electronics"
                              name="specialization"
                              value="Electronics"
                              checked={selectedSpecialization === "Electronics"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="electronics"
                              className="checkbox-label"
                            >
                              Electronics
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="it"
                              name="specialization"
                              value="IT"
                              checked={selectedSpecialization === "IT"}
                              onChange={handleSpecializationChange}
                            />
                            <label htmlFor="it" className="checkbox-label">
                              IT
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="exam">
                <div>
                  <div
                    className={`dropdown ${isExamExpanded ? "expanded" : ""}`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="exam">Exam:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleExamExpand}
                        >
                          {isExamExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isExamExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="mht-cet"
                              name="exam"
                              value="MHT CET"
                              checked={selectedExam === "MHT CET"}
                              onChange={handleExamChange}
                            />
                            <label htmlFor="mht-cet" className="checkbox-label">
                              MHT CET
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="jee"
                              name="exam"
                              value="JEE"
                              checked={selectedExam === "JEE"}
                              onChange={handleExamChange}
                            />
                            <label htmlFor="jee" className="checkbox-label">
                              JEE
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
        <div className="main-college">
          <div className="search">
            <div className="heading">Search Colleges</div>
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
                    filterColleges();
                  }
                }}
                placeholder="Search..."
              />
              <button onClick={filterColleges}>Search</button>
            </div>
          </div>

          <div className="college-list">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
                <div className="college-card" key={index}>
                  <div className="rank">
                    <div className="rank-ranks">{index + 1}</div>
                    <div className="rank-ranking-institute">
                      <div>NIRF '23</div>
                      <div>(All India)</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://images.shiksha.com/mediadata/images/1605086820phpSFQlAR.jpg"
                      alt="college_logo"
                    />
                  </div>
                  <div className="collge-info">
                    <div className="collge-name">{college.Name}</div>
                    <div className="info-two">
                      <div className="locations">
                        <div className="img">
                          <img src={Location} alt="location" />
                        </div>
                        <div className="address">{college.Location}</div>
                      </div>
                      <div className="verticalline">|</div>
                      <div className="rating">
                        <div className="rate">{college.Rating}</div>
                        <div className="star-rating">
                          {Array.from(
                            { length: Math.floor(college.Rating) },
                            (_, i) => (
                              <span className="star" key={i}></span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="verticalline">|</div>
                      <div className="college-fees">
                        <span>Fees:</span> ₹ {college["Course Offered"][0]}
                      </div>
                    </div>
                    <div className="info-three">
                      <div className="salary">
                        <span>Salary:</span> ₹ {college.Salary}
                      </div>
                    </div>
                    <div className="info-four">
                      <div className="admission">Admission</div>
                      <div className="dot">
                        <img src={Dot} alt="dot" />
                      </div>
                      <div className="coursesandfees">Courses & Fees</div>
                      <div className="dot">
                        <img src={Dot} alt="dot" />
                      </div>
                      <div className="placement">Placement</div>
                    </div>
                  </div>
                  <Link to={`/colleges/${college.Name}`}>Hello</Link>
                </div>
              ))
            ) : (
              <p>No colleges found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
