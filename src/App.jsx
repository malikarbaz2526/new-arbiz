import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import "./responsive.css"
import './meanmenu.min.css'

import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./pages/login/Login";
import Food from "./pages/food/Food";
import ProdunctDetails from "./pages/productDetails/ProdunctDetails";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import ContactUs from "./pages/constactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/petfood" element={<Food />} />
          <Route path="/product-details" element={<ProdunctDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
    
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
