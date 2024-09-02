import React from 'react'
import ReactSlider from 'react-slider';
import { ShoppingCart, Plus, Heart, Grid, AlignJustify ,ShoppingBag, ArrowLeft , ArrowRight, Search  } from "lucide-react"; // Import icons from lucide-react

import FoodProduct4 from "../../../assets/img/product/product-4.jpg";
import FoodProduct5 from "../../../assets/img/product/product-5.jpg";
import FoodProduct6 from "../../../assets/img/product/product-6.jpg";
import FoodProduct7 from "../../../assets/img/product/product-7.jpg";
import FoodProduct8 from "../../../assets/img/product/product-8.jpg";
import FoodProduct9 from "../../../assets/img/product/product-9.jpg";
import FoodProduct10 from "../../../assets/img/product/product-10.jpg";
import FoodProduct11 from "../../../assets/img/product/product-11.jpg";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopArea = () => {
    const [value, setValue] = useState([100, 500]);
  return (
    <>

<div className="shop-area pt-100 pb-100 gray-bg">
  <div className="container">
    <div className="row flex-row-reverse">
      <div className="col-lg-9">
        <div className="shop-topbar-wrapper">
          <div className="product-sorting-wrapper">
            <div className="product-show shorting-style">
              <label>
                Showing <span>1-20</span> of <span>100</span> Results
              </label>
              <select>
                <option value="">12</option>
                <option value="">24</option>
                <option value="">36</option>
              </select>
            </div>
          </div>
          <div className="grid-list-options">
            <ul className="view-mode">
              <li className="active">
                <a href="#product-grid" data-view="product-grid">
                <Grid size={24} color="currentColor" />

                </a>
              </li>
              <li>
                <a href="#product-list" data-view="product-list">
                <AlignJustify size={24} color="currentColor" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-list-product-wrapper">
          <div className="product-view product-grid">
            <div className="row">
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$20.00 </span>
                      <span className="old">$50.00</span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$19.00 </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                         <ShoppingBag size={24} color="currentColor" />
                         Add to cartsdsdsd
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                        <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Cat Buffalo Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$22.00 </span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$20.00 </span>
                      <span className="old">$50.00</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                          <ShoppingBag size={24} color="currentColor" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                         <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Legacy Dog Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$50.00 </span>
                      <span className="old">$70.00</span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$30.00 </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                        <ShoppingBag size={24} color="currentColor" />
                        Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                          <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Chicken Dry Cat Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$60.00 </span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$50.00 </span>
                      <span className="old">$60.00</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                        <ShoppingBag size={24} color="currentColor" />
                        Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                         <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Stomach Dog Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$70.00 </span>
                      <span className="old">$90.00</span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$25.00 </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                          <ShoppingBag size={24} color="currentColor" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                          <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Nourish Puppy Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$80.00 </span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$40.00 </span>
                      <span className="old">$70.00</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                          <ShoppingBag size={24} color="currentColor" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                        <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Tarpaulin Dog Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$10.00 </span>
                      <span className="old">$30.00</span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$30.00 </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                        <ShoppingBag size={24} color="currentColor" />
                        Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                         <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$22.00 </span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$19.00 </span>
                      <span className="old">$20.00</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                         <ShoppingBag size={24} color="currentColor" />
                         Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                        <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6">
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
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$20.00 </span>
                      <span className="old">$50.00</span>
                    </div>
                  </div>
                  <div className="product-list-content">
                    <h4>
                      <a href="#">Dog Calcium Food</a>
                    </h4>
                    <div className="product-price">
                      <span className="new">$19.00 </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipis elit, sed do
                      eiusmod tempor incididu ut labore et dolore magna aliqua.
                      Ut enim ad quis nostrud exerci ullamco laboris nisi ut
                      aliquip ex ea commodo consequat, Duis aute irure dolor.
                    </p>
                    <div className="product-list-action">
                      <div className="product-list-action-left">
                        <a
                          className="addtocart-btn"
                          title="Add to cart"
                          href="#"
                        >
                          <ShoppingBag size={24} color="currentColor" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-list-action-right">
                        <a title="Wishlist" href="#">
                        <Heart size={20} />
                        </a>
                        <a
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                          <Plus size={24} />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-style text-center mt-10">
              <ul>
                <li>
                  <a href="#">
                  <ArrowLeft size={24} color="currentColor" />

                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a className="active" href="#">
                  <ArrowRight size={24} color="currentColor" />

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="shop-sidebar">
          <div className="shop-widget">
            <h4 className="shop-sidebar-title">Search Products</h4>
            <div className="shop-search mt-25 mb-50">
              <form className="shop-search-form">
                <input type="text" placeholder="Find a product" />
                <button type="submit">
                <Search size={24} color="currentColor" />

                </button>
              </form>
            </div>
          </div>
          <div className="shop-widget">
      <h4 className="shop-sidebar-title">Filter By Price</h4>
      <div className="price_filter mt-25">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          min={0}
          max={1000}
          value={value}
          onChange={setValue}
          renderThumb={(props, state) => <div {...props}></div>}
        />
        <div className="price_slider_amount">
          <div className="label-input">
            <label>Price : </label>
            <input
              type="text"
              id="amount"
              name="price"
              value={`$${value[0]} - $${value[1]}`}
              readOnly
            />
          </div>
          <button type="button">Filter</button>
        </div>
      </div>
    </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Food Category </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">Canned Food</a>
                </li>
                <li>
                  <a href="#">Dry Food</a>
                </li>
                <li>
                  <a href="#">Food Pouches</a>
                </li>
                <li>
                  <a href="#">Food Toppers</a>
                </li>
                <li>
                  <a href="#">Fresh Food</a>
                </li>
                <li>
                  <a href="#">Frozen Food</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Top Brands </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">Authority</a>
                </li>
                <li>
                  <a href="#">AvoDerm Natural</a>
                </li>
                <li>
                  <a href="#">Bil-Jac</a>
                </li>
                <li>
                  <a href="#">Blue Buffalo</a>
                </li>
                <li>
                  <a href="#">Castor &amp; Pollux</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Health Consideration </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">
                    Bone Development <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Digestive Care <span>22</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    General Health <span>19</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Hip &amp; Joint <span>41</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Immune System <span>22</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Nutritional Option </h4>
            <div className="shop-list-style mt-20">
              <ul>
                <li>
                  <a href="#">
                    Grain Free <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Natural <span>22</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default ShopArea
