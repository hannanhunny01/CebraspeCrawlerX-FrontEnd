


import React, { useState } from "react";
import "./navbarUser.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="main-nav-one">
          <input className="navbar-user-input" placeholder="Pesquisar Aqui" type="text"></input>
          <button className="navbar-user-button">Submit</button>
        </div>

        {/* 2nd menu part  */}
        <div className="main-nav-two">
          <ul>
            <li>
              <NavLink to="/">Inscrever</NavLink>
            </li>
            <li>
              <NavLink to="/about">Meu Cadastros</NavLink>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="main-nav-three">
          <ul className="main-nav-three-ul">
            <li>
              <label for="profile-dropdown"> asdasds</label>
            <select className="profile-dropdown">
            <option value="fruit"> V</option>
            <option value="fruit"> <NavLink to="/login">hello</NavLink></option>
            <option value="vegetable"> <NavLink to="/login">gfdg</NavLink></option>
            <option value="meat"> <NavLink to="/login">dfgdsg</NavLink></option>
           </select>
        
            </li>
          </ul>

         
           
          </div>
       
      </nav>

   
    </>
  );
};

export default Navbar;