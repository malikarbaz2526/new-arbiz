import React, { useState } from "react";
import { Star } from "lucide-react";
const DescriptionReviewArea = () => {
  const [activeTab, setActiveTab] = useState("des-details1"); // Initialize the active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="description-review-area pb-100">
        <div className="container">
          <div className="description-review-wrapper gray-bg pt-40">
            <div className="description-review-topbar nav text-center">
              <a
                className={activeTab === "des-details1" ? "active" : ""}
                href="#des-details1"
                onClick={() => handleTabClick("des-details1")}
              >
                DESCRIPTION
              </a>
              <a
                className={activeTab === "des-details2" ? "active" : ""}
                href="#des-details2"
                onClick={() => handleTabClick("des-details2")}
              >
                MORE INFORMATION
              </a>
              <a
                className={activeTab === "des-details3" ? "active" : ""}
                href="#des-details3"
                onClick={() => handleTabClick("des-details3")}
              >
                REVIEWS (2)
              </a>
            </div>
            <div className="tab-content description-review-bottom">
              <div
                id="des-details1"
                className={`tab-pane ${
                  activeTab === "des-details1" ? "active" : ""
                }`}
              >
                <div className="product-description-wrapper">
                  <p>
                    This stewpot is part of the Scanpan Classic cookware range,
                    which boasts GreenTek non-stick coating which is 100% PFOA
                    free, meaning it's safer for your family and the
                    environment. The heavy-duty, pressure-cast aluminum body has
                    an extra-thick base for quick, even heating and it is
                    compatible with all cooking surfaces (excluding induction).
                    The extraordinarily hard exterior surface is a combination
                    of ceramic and titanium nonstick cooking surface which is
                    impossible to scrape away, even with metal utensils.
                    Patented spring-lock handle stays cool during normal stove
                    top use and the stewpot is also oven safe from up to 260°C.
                    It's also dishwasher safe for easy cleanup.{" "}
                  </p>
                  <p>
                    Scanpan is designed and manufactured in Denmark and offers a
                    lifetime warranty.
                  </p>
                  <ul>
                    <li>Key Features:</li>
                    <li>
                      Heavy duty, pressure cast aluminium with extra thick base
                      for quick heat up
                    </li>
                    <li>
                      Ceramic titanium surface with PFOA-free GreenTek non-stick
                      coating
                    </li>
                    <li>Fat-free frying, metal utensils safe</li>
                    <li>Suitable for all stove tops, except induction</li>
                    <li>Guaranteed not to warp</li>
                    <li>Fast and even heat distribution</li>
                    <li>Ovenproof up to 260°C</li>
                    <li>Dishwasher safe - but not recommended</li>
                    <li>Designed and manufactured in Denmark</li>
                  </ul>
                </div>
              </div>
              <div
                id="des-details2"
                className={`tab-pane ${
                  activeTab === "des-details2" ? "active" : ""
                }`}
              >
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>name:</span> Scanpan Classic Covered
                    </li>
                    <li>
                      <span>color:</span> orange , pink , yellow{" "}
                    </li>
                    <li>
                      <span>size:</span> xl, l , m , sl
                    </li>
                    <li>
                      <span>length:</span> 102cm, 110cm , 115cm{" "}
                    </li>
                    <li>
                      <span>Brand:</span> Nike, Religion, Diesel, Monki{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="des-details3"
                className={`tab-pane ${
                  activeTab === "des-details3" ? "active" : ""
                }`}
              >
                <>
                  <div className="rattings-wrapper">
                    <div className="sin-rattings">
                      <div className="star-author-all">
                        <div className="product-rating f-left">
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <span>{"  "}</span>
                          <span>(5)</span>
                        </div>
                        <div className="ratting-author f-right">
                          <h3>tayeb rayed</h3>
                          <span>12:24</span>
                          <span>9 March 2018</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Utenim ad minim veniam, quis nost
                        rud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Utenim ad
                        minim veniam, quis nost.
                      </p>
                    </div>
                    <div className="sin-rattings">
                      <div className="star-author-all">
                        <div className="product-rating f-left">
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star className="theme-color" />
                          <Star />
                          <span>{"  "}</span>
                          <span>(4)</span>
                        </div>
                        <div className="ratting-author f-right">
                          <h3>farhana shuvo</h3>
                          <span>12:24</span>
                          <span>9 March 2018</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Utenim ad minim veniam, quis nost
                        rud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Utenim ad
                        minim veniam, quis nost.
                      </p>
                    </div>
                  </div>
                  <div className="ratting-form-wrapper">
                    <h3>Add your Comments :</h3>
                    <div className="ratting-form">
                      <form action="#">
                        <div className="star-box">
                          <h2>Rating:</h2>
                          <div className="product-rating">
                            <Star className="theme-color" />
                            <Star className="theme-color" />
                            <Star className="theme-color" />
                            <Star />
                            <Star />
                            <span>(3)</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                              <input placeholder="Name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="rating-form-style mb-20">
                              <input placeholder="Email" type="text" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                              <textarea
                                name="message"
                                placeholder="Message"
                                defaultValue={""}
                              />
                              <input type="submit" defaultValue="add review" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionReviewArea;
