import React, {  useState } from "react";
import {
  Star,
  CheckCircle,
  ShoppingCart,
  Heart,

} from "lucide-react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { FaSkype } from "react-icons/fa"; // Import the Skype icon from Font Awesome icons

import largeImage1 from "../../../assets/img/product-details/l1.jpg";
import largeImage2 from "../../../assets/img/product-details/l1.jpg";
import largeImage3 from "../../../assets/img/product-details/l1.jpg";
import largeImage4 from "../../../assets/img/product-details/l1.jpg";

import smallImage1 from "../../../assets/img/product-details/s1.jpg";
import smallImage2 from "../../../assets/img/product-details/s2.jpg";
import smallImage3 from "../../../assets/img/product-details/s3.jpg";
import smallImage4 from "../../../assets/img/product-details/s4.jpg";

import zoomImage1 from "../../../assets/img/product-details/bl1.jpg";
import zoomImage2 from "../../../assets/img/product-details/bl2.jpg";
import zoomImage3 from "../../../assets/img/product-details/bl3.jpg";
import zoomImage4 from "../../../assets/img/product-details/bl4.jpg";

// Import the carousel library (e.g., Slick Slider)
import Slider from "react-slick";

const ShopArea = () => {

  // Create a state variable to manage the active carousel slide
  const [activeSlide, setActiveSlide] = useState(0);

  const [quantity, setQuantity] = useState(2);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (index) => setActiveSlide(index),
  };

  return (
    <>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-details-img">
                <img
                  id="zoompro"
                  src={largeImage1}
                  data-zoom-image={zoomImage1}
                  alt="zoom"
                />
                <div
                  id="gallery"
                  className="mt-12 product-dec-slider owl-carousel"
                >
                  <Slider {...settings}>
                    <a data-image={largeImage1} data-zoom-image={zoomImage1}>
                      <img src={smallImage1} alt="" />
                    </a>
                    <a data-image={largeImage2} data-zoom-image={zoomImage2}>
                      <img src={smallImage2} alt="" />
                    </a>
                    <a data-image={largeImage3} data-zoom-image={zoomImage3}>
                      <img src={smallImage3} alt="" />
                    </a>
                    <a data-image={largeImage4} data-zoom-image={zoomImage4}>
                      <img src={smallImage4} alt="" />
                    </a>
                    <a data-image={largeImage3} data-zoom-image={zoomImage3}>
                      <img src={smallImage3} alt="" />
                    </a>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product-details-content">
                <h2>Dog Calcium Food</h2>
                <div className="product-rating">
                  <Star className="theme-color" />
                  <Star className="theme-color" />
                  <Star className="theme-color" />
                  <Star />
                  <Star />
                  <span> ( 01 Customer Review )</span>
                </div>
                <div className="product-price">
                  <span className="new">$20.00 </span>
                  <span className="old">$50.00</span>
                </div>
                <div className="in-stock">
                  <span>
                    <CheckCircle /> In Stock
                  </span>
                </div>
                <div className="sku">
                  <span>SKU#: MS04</span>
                </div>
                <p>
                  Founded in 1989, Jack &amp; Jones is a Danish brand that
                  offers cool, relaxed designs that express a strong visual
                  style through their diffusion lines, Jack &amp; Jones
                  intelligence and Jack &amp; Jones vintage.
                </p>
                <div className="product-details-style shorting-style mt-30">
                  <label>Color:</label>
                  <select>
                    <option value="">Choose An Option </option>
                    <option value="">orange</option>
                    <option value="">pink</option>
                    <option value="">yellow</option>
                  </select>
                
                </div>
                <div className="quality-wrapper mt-30 product-quantity">
                  <label>Qty:</label>
                  <div className="cart-plus-minus">
                    <button onClick={handleDecrease} className="cart-minus">-</button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantity}
                      readOnly
                    />
                    <button onClick={handleIncrease} className="cart-plus">+</button>
                  </div>
                </div>
                <div className="product-list-action">
                  <div className="product-list-action-left">
                    <a className="addtocart-btn" href="#" title="Add to cart">
                      <ShoppingCart />
                      Add to cart
                    </a>
                  </div>
                  <div className="product-list-action-right">
                    <a href="#" title="Wishlist">
                      <Heart />
                    </a>
                  </div>
                </div>
                <div className="social-icon mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <AiFillTwitterCircle color="#1DA1F2" size={30} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillInstagram color="#E4405F" size={30} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillLinkedin color="#0077B5" size={30} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaSkype color="#00AFF0" size={30} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillDribbbleCircle color="#EA4C89" size={30} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;
