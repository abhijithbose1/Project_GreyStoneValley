import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="first-footer">
                <div className="logo-container">Grey Stone Valley</div>
                <div className="about-us-container">
                    <p>About Us</p>
                    <p>Investor</p>
                    <p>Location</p>
                    <p>Real Estate</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="second-footer">
                <div>
                    <p>© Copyright greystonevalley pvt. ltd.</p>
                </div>
                <div>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaWhatsapp />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
};
