import React from "react";
import { ShoppingCart, Plus, Heart } from "lucide-react"; // Import icons from lucide-react

import FoodProduct4 from "../../../assets/img/product/product-4.jpg";
import FoodProduct5 from "../../../assets/img/product/product-5.jpg";
import FoodProduct6 from "../../../assets/img/product/product-6.jpg";
import FoodProduct7 from "../../../assets/img/product/product-7.jpg";
import FoodProduct8 from "../../../assets/img/product/product-8.jpg";
import FoodProduct9 from "../../../assets/img/product/product-9.jpg";
import FoodProduct10 from "../../../assets/img/product/product-10.jpg";
import FoodProduct11 from "../../../assets/img/product/product-11.jpg";
import { Link } from "react-router-dom";

const ProductArea = () => {
  return (
    <>
      <div className="product-area pt-95 pb-70 gray-bg">
        <div className="container">
          <div className="section-title text-center mb-55">
            <h4>Most Populer</h4>
            <h2>Recent Products</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct4} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Dog Calcium Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$20.00 </span>
                    <span className="old">$50.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct5} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />{" "}
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />{" "}
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Cat Buffalo Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$22.00 </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct6} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Legacy Dog Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$50.00 </span>
                    <span className="old">$70.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct7} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Chicken Dry Cat Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$60.00 </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct8} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Stomach Dog Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$70.00 </span>
                    <span className="old">$90.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct9} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Nourish Puppy Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$80.00 </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct10} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Tarpaulin Dog Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$10.00 </span>
                    <span className="old">$30.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="product-wrapper mb-10">
                <div className="product-img">
                  <Link to="/product-details">
                    <img src={FoodProduct11} alt="" />
                  </Link>
                  <div className="product-action">
                    <a
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                    >
                      <Plus size={24} />{" "}
                    </a>
                    <a title="Add To Cart" href="#">
                      <ShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="product-action-wishlist">
                    <a title="Wishlist" href="#">
                      <Heart size={20} />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4>
                    <Link to="/product-details">Inception Dog Food</Link>
                  </h4>
                  <div className="product-price">
                    <span className="new">$20.00 </span>
                    <span className="old">$40.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductArea;
