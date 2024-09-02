import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css/animate.min.css';
import BannerImage from '../../../assets/img/banner/banner-3.png';

const AboutUsArea = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-us-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              ref={imgRef}
              className={`about-us-img pr-30 ${imgInView ? 'animate__animated animate__fadeInLeft' : ''}`}
              data-wow-duration="2s"
            >
              <img alt="" src={BannerImage} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-flex align-items-center">
            <div
              ref={contentRef}
              className={`about-us-content ${contentInView ? 'animate__animated animate__fadeInRight' : ''}`}
              data-wow-duration="2s"
            >
              <h2>About Arbizz</h2>
              <p>
              Welcome to Arbizz! We specialize in premium pet food and supplies, ensuring your pets receive the best care. Our mission is to offer high-quality products and exceptional service.

              </p>
              <div className="about-us-list">
                <ul>
                <li>Premium quality ingredients for optimal pet health</li>
                  <li>Wide range of products tailored to different pets and needs</li>
                  <li>Exceptional customer service and fast, reliable delivery</li>
                </ul>
              </div>
              <div className="about-us-btn">
                <a className="btn-style" href="#">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsArea;
