import React from "react";
import Logo from '../../assets/img/logo/logo-1.png';
import payment from '../../assets/img/icon-img/payment.png';
const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top pt-80 pb-50 gray-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="footer-info-wrapper">
                    <div className="footer-logo">
                      <a href="#">
                        <img src={Logo} alt="" width={"200px"} />
                      </a>
                    </div>
                    <p>
                    Arbizz LLC offers top-quality pet food and supplies for your furry friends. Shop now for the best deals!


                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="icon-social-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-skype" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-social-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 pl-50">
                  <h4 className="footer-title">USEFUL LINKS</h4>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="#">Help &amp; Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Returns &amp; Refunds</a>
                      </li>
                      <li>
                        <a href="#">Online Stores</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 pl-70">
                  <h4 className="footer-title">HELP</h4>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="#">Faq's </a>
                      </li>
                      <li>
                        <a href="#">Pricing Plans</a>
                      </li>
                      <li>
                        <a href="#">Order Traking</a>
                      </li>
                      <li>
                        <a href="#">Returns </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <div className="newsletter-wrapper">
                    <p>
                      Subscribe to our newsletter and get 10% off your first
                      purchase..
                    </p>
                    <div className="newsletter-style">
                      <div id="mc_embed_signup" className="subscribe-form">
                        <form
                          action="#"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          className="validate"
                          target="_blank"
                          noValidate=""
                        >
                          <div id="mc_embed_signup_scroll" className="mc-form">
                            <input
                              type="email"
                              defaultValue=""
                              name="EMAIL"
                              className="email"
                              placeholder="Your mail address"
                              required=""
                            />
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            <div className="mc-news" aria-hidden="true">
                              <input
                                type="text"
                                name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                tabIndex={-1}
                                defaultValue=""
                              />
                            </div>
                            <div className="clear">
                              <input
                                type="submit"
                                defaultValue="SEND"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="payment-img">
                    <a href="#">
                      <img src={payment} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom gray-bg-3 pt-17 pb-15">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p>
                    Copyright © <a href="#">Arbizz..</a> All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
