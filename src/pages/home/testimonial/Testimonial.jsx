import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImage from '../../../assets/img/banner/banner-1.jpg';
import Testi1 from '../../../assets/img/testi/3.jpg';
import Testi2 from '../../../assets/img/testi/4.jpg';
import Testi3 from '../../../assets/img/testi/5.jpg';
import TestiShap from '../../../assets/img/icon-img/testi-shap.png';

const Testimonial = () => {
  const textSlider = useRef(null);
  const imageSlider = useRef(null);

  const textSliderSettings = {
    asNavFor: imageSlider.current,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay to synchronize with the image slider
    fade: true,
  };

  const imageSliderSettings = {
    asNavFor: textSlider.current,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    beforeChange: (current, next) => textSlider.current.slickGoTo(next), // Sync with text slider
  };

  return (
    <>
      <div
        className="testimonial-area pt-90 pb-70 bg-img"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 ms-auto me-auto">
              <div className="testimonial-wrap text-center">
                {/* Testimonial Text Slider */}
                <Slider {...textSliderSettings} ref={textSlider} className="testimonial-text-slider">
                  <div className="sin-testiText">
                    <p>
                    "My cats absolutely love this new cat food! The ingredients are top-notch, and their coats are shinier and healthier than ever. Plus, they seem to have more energy and are more playful. Definitely a win in my book!"

                    </p>
                  </div>
                  <div className="sin-testiText">
                    <p>
                    "I’ve been feeding my dog this food for a few months now, and the results are amazing. His digestion has improved, and he’s more active. The best part is he actually looks forward to mealtime now!"
                    {" "}
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <p>
                    "This is hands-down the best pet food I've ever bought. My rabbit loves it, and it’s made with natural ingredients that I can trust. I appreciate the high quality and my rabbit’s health has improved since we switched."

                    </p>
                  </div>
                  <div className="sin-testiText">
                    <p>
                    "My cats absolutely love this new cat food! The ingredients are top-notch, and their coats are shinier and healthier than ever. Plus, they seem to have more energy and are more playful. Definitely a win in my book!"
                    {" "}
                    </p>
                  </div>
                </Slider>
                {/* Divider */}
                <div className="divider mt-4">
                  <img src={TestiShap} alt="" />
                </div>
                {/* Testimonial Image Slider */}
                <Slider {...imageSliderSettings} ref={imageSlider} className="testimonial-image-slider">
                  <div className="sin-testiImage">
                    <img className="testimonial-image" src={Testi1} alt="Testimonial 1" />
                    <h3>Robiul Islam</h3>
                  </div>
                  <div className="sin-testiImage">
                    <img className="testimonial-image" src={Testi2} alt="Testimonial 2" />
                    <h3>Robiul Islam</h3>
                  </div>
                  <div className="sin-testiImage">
                    <img className="testimonial-image" src={Testi3} alt="Testimonial 3" />
                    <h3>F. H. Shuvo</h3>
                  </div>
                  <div className="sin-testiImage">
                    <img className="testimonial-image" src={Testi3} alt="Testimonial 4" />
                    <h3>T. T. Rayed</h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
