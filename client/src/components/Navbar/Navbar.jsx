import React from "react";
import { BookNowButtons } from "../Buttons/Buttons";
import "./Navbar.scss";

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="image-container">Grey Stone Valley</div>
            <div className="location-about-us-container">
                <a href="#location">Locations</a>
                <a href="">About Us</a>
            </div>
                <BookNowButtons />
        </div>
    );
};
