import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Search, X, User, ShoppingBag, Trash, Menu } from "lucide-react";

// Import all images used in the header
import EnglandFlag from "../../assets/img/icon-img/en.jpg";
import BanglaFlag from "../../assets/img/icon-img/bl.jpg";
import ArabicFlag from "../../assets/img/icon-img/ar.jpg";
import HindiFlag from "../../assets/img/icon-img/in.jpg";
import SpanishFlag from "../../assets/img/icon-img/sp.jpg";
import Logo from "../../assets/img/logo/logo-1.jpg";
import CartImg1 from "../../assets/img/cart/cart-1.jpg";
import CartImg2 from "../../assets/img/cart/cart-2.jpg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubMenuToggle = (index) => {
    setActiveMenuItem(activeMenuItem === index ? null : index);
  };

  return (
    <>
      <header className="header-area">
        <div className="header-top theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="welcome-area">
                  <p>Default welcome msg!</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div className="account-curr-lang-wrap f-right">
                  <ul>
                    <li className="top-hover">
                      <a href="#">
                        $ Dollar (US) <i className="icon-arrow-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">Taka (BDT)</a>
                        </li>
                        <li>
                          <a href="#">Riyal (SAR)</a>
                        </li>
                        <li>
                          <a href="#">Rupee (INR)</a>
                        </li>
                        <li>
                          <a href="#">Dirham (AED)</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <img alt="flag" src={EnglandFlag} /> English{" "}
                        <i className="icon-arrow-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img alt="flag" src={BanglaFlag} /> Bangla
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="flag" src={ArabicFlag} /> Arabic
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="flag" src={HindiFlag} /> Hindi
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="flag" src={SpanishFlag} /> Spanish
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`header-bottom transparent-bar ${
            isSticky ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-5">
                <div className="logo pt-39 ">
                  <Link to="/">
                    <img alt="logo" src={Logo} width={"200px"} height={"70px"} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 d-none d-lg-block relative">
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">HOME</Link>
                      </li>
                      <li>
                        <Link to="/petfood">Food</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/blog">BLOG</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">CONTACT US</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-8 col-sm-8 col-7 relative">
                <div className="d-flex justify-content-end align-items-center">
                  <div className="search-login-cart-wrapper">
                    <div className="header-search same-style">
                      <button className="search-toggle">
                        <Search className="s-open" />
                        <X className="s-close" />
                      </button>
                      <div className="search-content">
                        <form action="#">
                          <input type="text" placeholder="Search" />
                          <button>
                            <Search className="icon-magnifier" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <Link to="/login">
                      <div className="header-login same-style">
                        <User className="icon-user icons" />
                      </div>
                    </Link>
                    <div className="header-cart same-style">
                      <button className="icon-cart" onClick={handleCartToggle}>
                        <ShoppingBag className="icon-handbag" />
                        <span className="count-style">02</span>
                      </button>
                      {isCartOpen && (
                        <div className="shopping-cart-content">
                          <ul>
                            <li className="single-shopping-cart">
                              <div className="shopping-cart-img">
                                <a href="#">
                                  <img alt="" src={CartImg1} />
                                </a>
                              </div>
                              <div className="shopping-cart-title">
                                <h4>
                                  <a href="#">Dog Calcium Food</a>
                                </h4>
                                <h6>Qty: 02</h6>
                                <span>$260.00</span>
                              </div>
                              <div className="shopping-cart-delete">
                                <a href="#">
                                  <Trash />
                                </a>
                              </div>
                            </li>
                            <li className="single-shopping-cart">
                              <div className="shopping-cart-img">
                                <a href="#">
                                  <img alt="" src={CartImg2} />
                                </a>
                              </div>
                              <div className="shopping-cart-title">
                                <h4>
                                  <a href="#">Dog Calcium Food</a>
                                </h4>
                                <h6>Qty: 02</h6>
                                <span>$260.00</span>
                              </div>
                              <div className="shopping-cart-delete">
                                <a href="#">
                                  <Trash />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="shopping-cart-total">
                            <h4>
                              Shipping: <span>$20.00</span>
                            </h4>
                            <h4>
                              Total: <span className="shop-total">$260.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-btn">
                            <a href="#">view cart</a>
                            <a href="#">checkout</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-lg-none">
                <button
                  className="mobile-menu-toggle"
                  onClick={handleMenuToggle}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
                </div>
              </div>
              
              <div
                className={`mobile-menu-area electro-menu fullscreen ${
                  isMobileMenuOpen ? "open" : ""
                }`}
              >
                <div className="mobile-menu">
                  {isMobileMenuOpen && (
                    <button className="close-menu" onClick={handleMenuToggle}>
                      <X size={24} /> {/* Close button icon */}
                    </button>
                  )}
                  <nav id="mobile-menu-active">
                    <ul className="menu-overflow">
                      <li className={activeMenuItem === 0 ? "open" : ""}>
                        <a href="/" onClick={() => handleSubMenuToggle(0)}>
                          HOME
                        </a>
                      </li>
                      <li className={activeMenuItem === 1 ? "open" : ""}>
                        <a href="about-us" onClick={() => handleSubMenuToggle(1)}>
                          About Us
                        </a>
                      </li>
                      <li className={activeMenuItem === 2 ? "open" : ""}>
                        <a
                          href="/petfood"
                          onClick={() => handleSubMenuToggle(2)}
                        >
                          FOOD
                        </a>
                      </li>
                      <li className={activeMenuItem === 3 ? "open" : ""}>
                        <a href="/blog" onClick={() => handleSubMenuToggle(3)}>
                          BLOG
                        </a>
                      </li>
                      <li className={activeMenuItem === 4 ? "open" : ""}>
                        <a
                          href="/contact-us"
                          onClick={() => handleSubMenuToggle(4)}
                        >
                          CONTACT US
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
