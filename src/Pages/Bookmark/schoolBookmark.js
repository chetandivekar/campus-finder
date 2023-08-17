import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bookmark.css";
import Dot from "../School/schoolImages/dot.svg"; // Update the path accordingly
import Location from "../School/schoolImages/location.svg"; // Update the path accordingly
import SchoolSkeleton from "../School/SchoolSkeleton"; // Update the path accordingly
import { useSchoolBookmarkContext } from "../../context/schoolBookmarkContext"; // Import the school bookmark context

const SchoolBookmark = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [savedSchools, setSavedSchools] = useState([]);

  // Saved school Context
  const { bookmarkedSchools } = useSchoolBookmarkContext();

  useEffect(() => {
    setSavedSchools(bookmarkedSchools);
  }, [bookmarkedSchools]);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
  }, [bookmarkedSchools]);

  console.log("saved",savedSchools);

  return (
    <div className="mains">
      <div className="lists">
        <h1
          style={{ fontSize: "1.6rem", marginTop: "1rem", fontWeight: "500" }}
        >
          Your Saved Schools
        </h1>
        <div className="school-list">
          {showSkeleton ? (
            <SchoolSkeleton cards={8} />
          ) : savedSchools.length > 0 ? (
            savedSchools.map((school) => (
                <div className="college-card" key={school._id}>
                <div className="rank">
                  <div className="rank-ranks">{school.school.ranking}</div>
                  <div className="rank-ranking-institute">
                    <div>NIRF '23</div>
                    <div>(All India)</div>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={school.school.images.logo_img}
                    alt="college_logo"
                  />
                </div>
                <div className="collge-info">
                  <Link to={`/colleges/${school.school.name}`}>
                    <div className="collge-name">{school.school.name}</div>
                  </Link>

                  <div className="info-two">
                    <div className="locations">
                      <div className="img">
                        <img src={Location} alt="location" />
                      </div>
                      <div className="address">
                        {school.school.location &&
                          school.school.location.city}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="rating">
                      <div className="rate">
                        {school.school.ratings.toFixed(1)}
                      </div>
                      <div className="star-rating">
                        {Array.from(
                          {
                            length: Math.floor(
                              school.school.ratings.toFixed(1)
                            ),
                          },
                          (_, i) => (
                            <span className="star" key={i}></span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="college-fees">
                      <span>Fees:</span> ₹ {school.school.fees.BE}
                    </div>
                  </div>
                  <div className="info-three">
                    <div className="salary">
                      <span>Salary:</span> ₹ {school.school.package}
                    </div>
                  </div>
                  <div className="info-four">
                    <div className="admission">
                      <Link to={`/colleges/${school.school.name}`}>
                        Admission
                      </Link>
                    </div>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${school.school.name}`}>
                      Courses & Fees
                    </Link>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${school.school.name}`}>
                      Placement
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No School Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolBookmark;
