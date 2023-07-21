import React from 'react'
import "../Institute/Institute.css";
import "../Singleschool/SingleSchool.css"
import Banner from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg";
import Logo from "../Institute/Institute_logo/download.png";
import Mail from "../Institute/Institute_logo/image 17.png";
import Rating from "../Institute/Institute_logo/image 18.png";
import Star from "../Institute/Institute_logo/ic_round-star.svg";
import Profile from "../Institute/Institute_logo/carbon_user-avatar-filled.svg";
const SingleSchool = () => {
    return (
        <div style={{ backgroundColor: "#F3F2EF" }}>
          <div class="institute-main ">
            <div className="institute-banner-section container mx-auto mt-8">
              <img
                src={Banner}
                className="institute-banner rounded-lg"
                alt=""
                srcset=""
              />
              <img
                src={Logo}
                className="institute-logo border-2 border-black rounded-lg ml-6 mb-6"
                alt=""
                srcset=""
              />
              <div className="banner-detail mt-4">
                <div className="banner-detail__name">
                  <h1>
                    <span className="font-bold text-3xl">
                      VIVA INSTITUTE OF TECHNOLOGY
                    </span>{" "}
                  </h1>
                  <div className="small-detail">
                    <h1 className="small-detail-address ml-1">
                      <i class="fa-solid fa-location-dot"></i>{" "}
                      <span>Virar, Palghar</span>
                    </h1>
                    <div className="small-detail-govern ml-3 rounded">Private</div>
                    <div className="small-detail-university ml-3 ">University</div>
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
                <p class="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  quis libero risus. Nullam consectetur quam eget dolor eleifend, ut
                  tincidunt erat accumsan. Vestibulum finibus iaculis quam, vel
                  efficitur eros ultricies vel. Nam pellentesque euismod dolor, et
                  tincidunt ex. Sed a ultricies ante, eget convallis erat. Aliquam
                  erat volutpat. Sed tempor dui ex, eu auctor risus interdum et.
                  Nulla facilisi. Cras sit amet tincidunt lacus. Donec euismod
                  consectetur velit non ultrices. Phasellus mattis tellus purus, in
                  congue urna efficitur non. Aenean sed elit consequat, dapibus enim
                  in, eleifend enim. Vivamus fringilla velit ut lectus ultricies
                  auctor. Aliquam varius maximus justo, sit amet elementum urna
                  scelerisque at. Suspendisse potenti. Nunc quis risus felis.
                </p>
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
                      <span>Viva Institute Of Techhology</span>
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
                      <span> +2222-20202-22</span>
                    </h4>
                  </div>
                </div>
                <hr />
                <div className="email-info info-common">
                  <div className="contact-img common-head">E-Mail: </div>
                  <div className="contact-detail common-main">
                    <h4>
                      <span>Vivatechnology@gmail.org</span>
                    </h4>
                  </div>
                </div>
                <div className="button-to-webite">
                  <button className="btn">Go To College Website</button>
                </div>
              </div>
            </div>
            <div className="institute-rating container mx-auto mt-8">
              <div className="left-rating">
                <div className="rating-img">
                  <img src={Rating} alt="" srcset="" />
                </div>
                <div className="rating-detail">
                  <h5>
                    <span>Viva Institute Of Technology</span>
                  </h5>
                  <h1>
                    <span className="font-extrabold">
                      Stuents Rating And Review
                    </span>
                  </h1>
                </div>
              </div>
              <div className="right-rating">
                <div className="rating-svg">
                  <img src={Star} alt="" srcset="" />
                  <h1>
                    <span>1.1</span>/5
                  </h1>
                </div>
              </div>
            </div>
            <div className="reviews container mx-auto mt-8">
              <div className="reviewer-name">
                <div className="profile-logo">
                  <img src={Profile} alt="" srcset="" />
                </div>
                <div className="identity">
                  <h1>
                    <span>Gaurav Madusudan Harayan</span>
                  </h1>
                  <h2>
                    <span>B.E. in Computer Engineering - Batch of 2023</span>
                  </h2>
                </div>
              </div>
              <div className="summarized-review">
                <h1>
                  <span>No Good Placements As Shown</span>
                </h1>
              </div>
              <div className="placements-review"><p>
                  <span>Placements: </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat porro minima repudiandae reiciendis
                  dolor incidunt veniam atque nam earum quae odit officia dolore
                  eveniet praesentium velit error qui tempora, vel perspiciatis
                  beatae asperiores optio corporis cumque. Beatae assumenda, saepe
                  ratione pariatur ex cumque? Suscipit officiis dolor in vitae
                  consequuntur vel.
                </p></div>
              <div className="infrastructure-review">
                <p>
                  <span>Infrastructure: </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat porro minima repudiandae reiciendis
                  dolor incidunt veniam atque nam earum quae odit officia dolore
                  eveniet praesentium velit error qui tempora, vel perspiciatis
                  beatae asperiores optio corporis cumque. Beatae assumenda, saepe
                  ratione pariatur ex cumque? Suscipit officiis dolor in vitae
                  consequuntur vel.
                </p>
              </div>
            </div>
            <div className="reviews container mx-auto mt-8">
              <div className="reviewer-name">
                <div className="profile-logo">
                  <img src={Profile} alt="" srcset="" />
                </div>
                <div className="identity">
                  <h1>
                    <span>Gaurav Madusudan Harayan</span>
                  </h1>
                  <h2>
                    <span>B.E. in Computer Engineering - Batch of 2023</span>
                  </h2>
                </div>
              </div>
              <div className="summarized-review">
                <h1>
                  <span>No Good Placements As Shown</span>
                </h1>
              </div>
              <div className="placements-review"><p>
                  <span>Placements: </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat porro minima repudiandae reiciendis
                  dolor incidunt veniam atque nam earum quae odit officia dolore
                  eveniet praesentium velit error qui tempora, vel perspiciatis
                  beatae asperiores optio corporis cumque. Beatae assumenda, saepe
                  ratione pariatur ex cumque? Suscipit officiis dolor in vitae
                  consequuntur vel.
                </p></div>
              <div className="infrastructure-review">
                <p>
                  <span>Infrastructure: </span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quaerat porro minima repudiandae reiciendis
                  dolor incidunt veniam atque nam earum quae odit officia dolore
                  eveniet praesentium velit error qui tempora, vel perspiciatis
                  beatae asperiores optio corporis cumque. Beatae assumenda, saepe
                  ratione pariatur ex cumque? Suscipit officiis dolor in vitae
                  consequuntur vel.
                </p>
              </div>
            </div>
            <div className="faq container mx-auto mt-8">
              <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold mt-8 mb-4">
                  Frequently Asked Questions
                </h1>
    
                <div class="accordion">
                  {/* <!-- FAQ Item 1 --> */}
                  <div class="accordion-item">
                    <h2 class="accordion-title">
                      <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                        <span class="text-lg font-medium">Question 1?</span>
                        <span class="accordion-icon">&#43;</span>
                      </button>
                    </h2>
                    <div class="accordion-content">
                      <p class="text-gray-700">Answer to Question 1.</p>
                    </div>
                  </div>
    
                  {/* <!-- FAQ Item 2 --> */}
                  <div class="accordion-item">
                    <h2 class="accordion-title">
                      <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                        <span class="text-lg font-medium">Question 2?</span>
                        <span class="accordion-icon">&#43;</span>
                      </button>
                    </h2>
                    <div class="accordion-content">
                      <p class="text-gray-700">Answer to Question 2.</p>
                    </div>
                  </div>
    
                  {/* <!-- FAQ Item 3 --> */}
                  <div class="accordion-item">
                    <h2 class="accordion-title">
                      <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                        <span class="text-lg font-medium">Question 3?</span>
                        <span class="accordion-icon">&#43;</span>
                      </button>
                    </h2>
                    <div class="accordion-content">
                      <p class="text-gray-700">Answer to Question 3.</p>
                    </div>
                  </div>
    
                  {/* <!-- Add more FAQ items as needed --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default SingleSchool
