import React from "react";
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import Banner2 from "../../../assets/img/banner/banner-2.png";
import 'animate.css/animate.min.css';

const DealArea = () => {
  // Use Intersection Observer for fade-in animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <div 
      className={`deal-area bg-img pt-95 pb-100 ${inView ? 'animate__animated animate__fadeIn' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-title text-center mb-50">
          <h4>Best Product</h4>
          <h2>Deal of the Week</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className={`deal-img ${inView ? 'animate__animated animate__fadeInLeft' : ''}`} data-wow-duration="1s">
              <a href="#">
                <img src={Banner2} alt="Deal Banner" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className={`deal-content ${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
              <h3>
                <a href="#">Stomach Dog Food</a>
              </h3>
              <div className="deal-pro-price">
                <span className="deal-old-price">$90.00</span>
                <span> $70.00</span>
              </div>
              <p>
              Designed specifically for dogs with sensitive stomachs, this specialized dog food helps to alleviate digestive issues and promote overall gastrointestinal health. Made with easily digestible ingredients such as high-quality turkey and rice, this formula reduces the risk of food sensitivities and helps maintain a balanced diet. Fortified with probiotics, it supports healthy digestion and reduces discomfort. Ideal for dogs of all sizes and ages who experience digestive distress.

              </p>
              <div className="timer timer-style">
                <div data-countdown="2023/10/01" />
              </div>
              <div className="discount-btn mt-35">
                <a className="btn-style" href="#">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealArea;
