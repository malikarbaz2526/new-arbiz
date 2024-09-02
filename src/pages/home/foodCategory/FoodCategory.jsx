import React from "react";
import FoodProduct1 from "../../../assets/img/product/product-1.jpg"
import FoodProduct2 from "../../../assets/img/product/product-2.jpg"
import FoodProduct3 from "../../../assets/img/product/product-3.jpg"

const FoodCategory = () => {
  return (
    <>
      <div className="food-category food-category-col pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-food-category cate-padding-1 text-center mb-30">
                <div className="single-food-hover-2">
                  <img src={FoodProduct1} alt="" />
                </div>
                <div className="single-food-content">
                  <h3>Dogs Food</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-food-category cate-padding-2 text-center mb-30">
                <div className="single-food-hover-2">
                  <img src={FoodProduct2} alt="" />
                </div>
                <div className="single-food-content">
                  <h3>Cats Food</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-food-category cate-padding-3 text-center mb-30">
                <div className="single-food-hover-2">
                  <img src={FoodProduct3} alt="" />
                </div>
                <div className="single-food-content">
                  <h3>Fishs Food</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
