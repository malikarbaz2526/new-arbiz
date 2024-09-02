import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
const ContactArea = () => {
    return (
    <>
            <div className="contact-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <MapPin />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Our Location</h4>
                                    <p>312 W 2nd St Unit #A4615 1</p>
                                    <p>
                                        <a href="#">Casper, WY 8260</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <Phone />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Contact us Anytime</h4>
                                    <p>Mobile: +13072438068</p>
                                    <p>Fax: +13072438068</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <Mail />
                                </div>
                                <div className="contact-info-content">
                                    <h4>E-mail</h4>
                                    <p>
                                        <a href="#">Support24/7@example.com </a>
                                    </p>
                                    <p>
                                        <a href="#">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-message-wrapper">
                                <h4 className="contact-title">GET IN TOUCH</h4>
                                <div className="contact-message">
                                    <form
                                        id="contact-form"
                                        action="https://htmldemo.net/Arbizz/Arbizz/assets/mail.php"
                                        method="post"
                                    >
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <input
                                                        name="name"
                                                        placeholder="Full Name"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <input
                                                        name="email"
                                                        placeholder="Email Address"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-form-style mb-20">
                                                    <input
                                                        name="subject"
                                                        placeholder="Subject"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-form-style">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        defaultValue={""}
                                                    />
                                                    <button className="submit btn-style" type="submit">
                                                        SEND MESSAGE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">

                        <div id="map">
                       <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=America+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                            <div />
                        </div>
                    </div>
                </div>
                </div>
            </>
            );
};

            export default ContactArea;
