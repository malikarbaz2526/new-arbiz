import React from "react";
import shipping from '../../../assets/img/icon-img/shipping.png';
import support from '../../../assets/img/icon-img/support.png';
import money from '../../../assets/img/icon-img/money.png';
const ServiceArea = () => {
  return (
    <>
      <div className="service-area bg-img pt-100 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="service-content text-center mb-30 service-color-1">
                <img src={shipping} alt="" />
                <h4>FREE SHIPPING</h4>
                <p>Free shipping on all order </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="service-content text-center mb-30 service-color-2">
                <img src={support} alt="" />
                <h4>ONLINE SUPPORT</h4>
                <p>Online support 24 hours a day</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="service-content text-center mb-30 service-color-3">
                <img src={money} alt="" />
                <h4>MONEY RETURN</h4>
                <p>Back guarantee under 5 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
