import React, { useEffect, useState, useRef } from "react";
import "../Singleschool/SingleSchool.css";
import "../Institute/Institute.css";
import Mail from "../Institute/Institute_logo/image 17.png";
import Rating from "../Institute/Institute_logo/image 18.png";
import Star from "../Institute/Institute_logo/ic_round-star.svg";
import Profile from "../Institute/Institute_logo/carbon_user-avatar-filled.svg";
import { useParams } from "react-router-dom";
import Skeleton from "../College/SingleCollegeSkeleton";
import { FaStar } from "react-icons/fa";
import Cookies from "js-cookie";
import Banner from "../Institute/Institute_logo/download.png";
import logo from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg";

const SingleSchool = () => {
  const { schoolName } = useParams();
  const [contactArray, setContactArray] = useState([]);
  const [schools, setSchools] = useState([]);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const [filteredSchool, setFilteredSchool] = useState([]);
  const [bookmarkcollege, setBookMarkCollege] = useState([]);
  const [isCollegeSaved, setIsCollegeSaved] = useState(false);

  // useEffect(()=>{
  //   const numbersArray = selectedSchool.contact_information.school_contact.split('').map(Number);
  //   return setContactArray(numbersArray);
  // },[]
  // )

  useEffect(() => {
    const token = Cookies.get("token");
    fetch("http://localhost:4080/api/school", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFilteredSchool(data.schoolList);
        } else {
          // Handle the case where data.success is false (API call was not successful)
          console.error("Error fetching bookmarked colleges");
        }
      })
      .catch((error) => {
        console.error("Error fetching bookmarked colleges:", error);
      });
  }, []);
  const selectedSchool = filteredSchool.find(
    (school) => school.name === schoolName
  );
  if (!selectedSchool) {
    return (
      <div className="container mx-auto">
        <Skeleton />
      </div>
    );
  }
  const getModal = () => {
    ref.current.click();
  };
  const closeModal = () => {
    ref1.current.click();
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating: rating,
      comment: comment,
      schools_Id: selectedSchool._id,
    };
    const token = Cookies.get("token"); // Replace with your logic to get the token from cookies

    fetch("http://localhost:4080/api/school/review", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Review submitted:", data);
        setRating(null);
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });

    window.location.reload();
    closeModal();
  };

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <div class="institute-main ">
        <div className="institute-banner-section container mx-auto mt-8">
          <img
            src={logo}
            className="institute-banner rounded-lg"
            alt=""
            srcset=""
          />
          <img
            src={Banner}
            className="institute-logo border-2 border-black rounded-lg ml-6 mb-6"
            alt=""
            srcset=""
          />
          <div className="banner-detail mt-4">
            <div className="banner-detail__name">
              <h1>
                <span className="font-bold text-3xl">
                  {selectedSchool.name}
                </span>{" "}
              </h1>
              <div className="small-detail">
                <h1 className="small-detail-address ml-1">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <span>
                    {selectedSchool.location.city},{" "}
                    {selectedSchool.location.state}
                  </span>
                </h1>
                <div className="small-detail-govern ml-3 rounded">
                  {selectedSchool.type_Of_board.map((e, index) =>
                    index === selectedSchool.type_Of_board.length - 1
                      ? e
                      : e + " , "
                  )}
                </div>
              </div>
            </div>
            <button className="btn save-btn border-2 border-red-900">
              <i class="fa-regular fa-bookmark">
                <span className="ml-2">SAVE</span>
              </i>
            </button>
          </div>
        </div>
        <div className="institute-aboutus container mx-auto mt-8">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold mt-8 mb-4">About Institute</h1>
            <p class="text-lg text-gray-700">{selectedSchool.description}</p>
          </div>
        </div>
        <div className="institute-information container mx-auto mt-8">
          <div className="information-detail">
            <div className="contact-info info-common">
              <div className="contact-img">
                <img src={Mail} alt="" />
              </div>
              <div className="contact-detail">
                <h4>
                  <span> {selectedSchool.name}</span>
                </h4>
                <h1>
                  <span>Contact Information</span>
                </h1>
              </div>
            </div>
            <div className="address-info info-common">
              <div className="address-heading common-head">Address: </div>
              <div className="address-detail common-main">
                <h4>
                  <span>
                    FVF5+H75, Shirgaon, Veer Sawarkar road, Virar(East),
                    Tal-Vasai, Chandansar, Virar, Maharashtra 401303
                  </span>
                </h4>
              </div>
            </div>
            <hr />
            <div className="phone-info info-common">
              <div className="contact-img common-head">Phone: </div>
              <div className="contact-detail common-main">
                <h4>
                  {/* <span>First Value: {contactArray[0]}</span>
                  <span>Second Value:{contactArray[1]}</span> */}
                <span>{selectedSchool.contact_information.school_contact}</span>
                </h4>
              </div>
            </div>
            <hr />
            <div className="email-info info-common">
              <div className="contact-img common-head">E-Mail: </div>
              <div className="contact-detail common-main">
                <h4>
                  <span>{selectedSchool.contact_information.school_email}</span>
                </h4>
              </div>
            </div>
            <div className="button-to-webite">
              <button className="btn" style={{ width: "15rem" }}>
                Go To School Website
              </button>
            </div>
          </div>
        </div>
        <div className="institute-rating container mx-auto mt-8 mb-2">
          <div className="left-rating">
            <div className="rating-img">
              <img src={Rating} alt="" srcSet="" />
            </div>
            <div className="rating-detail">
              <h5>
                <span style={{ fontSize: "0.9rem", color: "#444" }}>
                  {selectedSchool.name}
                </span>
              </h5>
              <h1>
                <span style={{ fontSize: "1.5rem" }}>
                  Students Rating And Review
                </span>
              </h1>
            </div>
          </div>
          <div className="right-rating">
            <div className="rating-svg">
              <img src={Star} alt="" srcSet="" />
              <h1>
                <span>{selectedSchool.ratings.toFixed(1)}</span>/5
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={getModal}
          className="addyourreview container mx-auto mb-8"
        >
          {" "}
          <div>
            <img
              style={{ width: "45px", marginLeft: "2rem" }}
              src="https://img.icons8.com/?size=512&id=48129&format=png"
              alt=""
            />
          </div>
          <div style={{ fontSize: "1.2rem" }}>Add your Review</div>
        </div>

        <button
          ref={ref}
          style={{ display: "none" }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add your Review
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar
                        className="stars"
                        size={20}
                        color={
                          currentRating <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}

                <form action="">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Write a review
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      value={comment}
                      onChange={handleCommentChange}
                      required
                      placeholder="Write a comment..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      ref={ref1}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {selectedSchool.reviews.length > 0 ? (
          selectedSchool.reviews.map((review, index) => (
            <div key={index}>
              <div className="reviews container mx-auto mt-3">
                <div className="top">
                  <div className="img">
                    <img src={Profile} alt="" />
                  </div>
                  <div className="right-star">
                    <div className="name">{review.name}</div>
                    <div className="mix-right">
                      <div className="star-rating">
                        {Array.from(
                          {
                            length: Math.floor(
                              selectedSchool.ratings.toFixed(1)
                            ),
                          },
                          (_, i) => (
                            <span className="star" key={i}></span>
                          )
                        )}
                      </div>
                      <div style={{ fontSize: "0.8rem" }}>
                        {" "}
                        ({review.rating})
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">{review.comment}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="reviews container mx-auto mt-6">No reviews</div>
        )}
      </div>
    </div>
  );
};

export default SingleSchool;
