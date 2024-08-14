import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <a href="#">#Logo</a>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/prefrences" >Preferences</NavLink></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;