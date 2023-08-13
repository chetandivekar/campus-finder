import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bookmark.css";
import Dot from "../College/collegeImages/dot.svg";
import Location from "../College/collegeImages/location.svg";
import CollegeSkeleton from "../College/CollegeSkeleton";
import { useBookmarkContext } from "../../context/bookMarkContext";

const Bookmark = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [savedColleges, setSavedColleges] = useState([]);

  // Saved college Context
  const { bookmarkcollege } = useBookmarkContext();

  useEffect(() => {
    setSavedColleges(bookmarkcollege);
  }, [bookmarkcollege]);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
  }, [bookmarkcollege]);

  return (
    <div className="mains">
      <div className="lists">
        <h1
          style={{ fontSize: "1.6rem", marginTop: "1rem", fontWeight: "500" }}
        >
          Your Saved Colleges
        </h1>
        <div className="college-list">
          {showSkeleton ? (
            <CollegeSkeleton cards={8} />
          ) : savedColleges.length > 0 ? (
            savedColleges.map((college) => (
              <div className="college-card" key={college._id}>
                <div className="rank">
                  <div className="rank-ranks">{college.college.ranking}</div>
                  <div className="rank-ranking-institute">
                    <div>NIRF '23</div>
                    <div>(All India)</div>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={college.college.images.logo_img}
                    alt="college_logo"
                  />
                </div>
                <div className="collge-info">
                  <Link to={`/colleges/${college.college.name}`}>
                    <div className="collge-name">{college.college.name}</div>
                  </Link>

                  <div className="info-two">
                    <div className="locations">
                      <div className="img">
                        <img src={Location} alt="location" />
                      </div>
                      <div className="address">
                        {college.college.location &&
                          college.college.location.city}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="rating">
                      <div className="rate">
                        {college.college.ratings.toFixed(1)}
                      </div>
                      <div className="star-rating">
                        {Array.from(
                          {
                            length: Math.floor(
                              college.college.ratings.toFixed(1)
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
                      <span>Fees:</span> ₹ {college.college.fees.BE}
                    </div>
                  </div>
                  <div className="info-three">
                    <div className="salary">
                      <span>Salary:</span> ₹ {college.college.package}
                    </div>
                  </div>
                  <div className="info-four">
                    <div className="admission">
                      <Link to={`/colleges/${college.college.name}`}>
                        Admission
                      </Link>
                    </div>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.college.name}`}>
                      Courses & Fees
                    </Link>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.college.name}`}>
                      Placement
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No College Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
