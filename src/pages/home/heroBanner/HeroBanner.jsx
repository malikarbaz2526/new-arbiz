import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import icons from lucide-react
import SliderImage1 from "../../../assets/img/slider/slider-single-img.png";
import SliderImage2 from "../../../assets/img/slider/slider-single-img-2.png";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <ArrowLeft size={24} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <ArrowRight size={24} />
  </div>
);

const HeroBanner = () => {
  // State to manage initial animation
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set to false after the first load
    const timer = setTimeout(() => setIsFirstLoad(false), 1000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />, // Use custom previous arrow
    nextArrow: <NextArrow />, // Use custom next arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-area">
      <Slider {...settings}>
        {/* Slider Item 1 */}
        <div className="single-slider yellow-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 col-sm-7">
                <div className={`slider-content pt-114 ${isFirstLoad ? 'animate__animated animate__fadeInLeft' : ''}`}>
                  <h3>We keep pets for pleasure.</h3>
                  <h1>
                    Food &amp; Vitamins <br />
                    For all Pets
                  </h1>
                  <div className="slider-btn">
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 col-sm-5">
                <div className={`animate__animated ${isFirstLoad ? 'animate__fadeInRight' : ''}`}>
                  <img src={SliderImage1} alt="Slider Image 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Item 2 */}
        <div className="single-slider yellow-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                <div className="slider-content pt-114">
                  <h3>We keep pets for pleasure.</h3>
                  <h1>
                    Food &amp; Vitamins <br />
                    For all Pets
                  </h1>
                  <div className="slider-btn">
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-5 col-12">
                <div>
                  <img src={SliderImage2} alt="Slider Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Slider Items */}
      </Slider>
    </div>
  );
};

export default HeroBanner;
