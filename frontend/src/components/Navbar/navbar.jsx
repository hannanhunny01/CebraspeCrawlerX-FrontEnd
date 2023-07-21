import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="main-nav-one">
          <h2>
            <span>C</span>braspe
            <span>C</span>rawler
            <span>X</span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className="main-nav-two">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/service">Status</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contato</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="main-nav-three">
          <ul className="main-nav-three-ul">
            <li>
            <NavLink to="/">Login</NavLink>
            </li>
            <li>
            <NavLink to="/">SignUp</NavLink>
            </li>
          </ul>

         
           
          </div>
       
      </nav>

   
    </>
  );
};

export default Navbar;