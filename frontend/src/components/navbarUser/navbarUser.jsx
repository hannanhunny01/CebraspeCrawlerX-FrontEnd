import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbarUser.css";
import { UserContext } from "../../Context/userContext";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [token,setToken] = useContext(UserContext)
   
  const logout = () =>{
     if(token){
      setToken(null);
      navigate('/login')
     }
  }



  return (
    <nav className="main-navbar-user">
      <div className="navbar-logo">
        <h2 className="navbar-logo-h2-hello">
          <span>C</span>
          <span>braspe</span>
          <span>Crawler</span>
          <span>X</span>
        </h2>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <NavLink to="/items">Increver</NavLink>
          </li>
          <li>
            <NavLink to="/myitems">Incritos</NavLink>
          </li>
          <li>
            <NavLink to="/login">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-user">
        <div
          className={`user-icon ${showDropdown ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={`user-dropdown ${showDropdown ? "active" : ""}`} ref={dropdownRef}>
          <ul>
            <li>
              <NavLink to="/profile">Meu Perfil</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Termo & Servicos</NavLink>
            </li>
            <li onClick={logout}>
             Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
