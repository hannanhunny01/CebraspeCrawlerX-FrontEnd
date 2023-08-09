import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import facebook from "../../assets/icons/facebookicon.png"
import google from "../../assets/icons/googleicon.png"
import { Link } from 'react-router-dom';

import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "user123" && password === "pass123") {
      console.log("Login successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="main-login">
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <div className="form-group">
            <label className="label" htmlFor="email-login">
              Email
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="email"
              id="email-login"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="senha-login">
              Password
            </label>
            <input
              className="input-field"
              placeholder="Enter your password"
              type="password"
              id="senha-login"
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <div className="login-forgotpassword">   <Link to="/"> Esqueceu Senha?</Link></div>
           <div style={{'textAlign':'center','fontSize':'15px'}} >Ou Entrar usando</div>
          <div className="login-icon-container">
            <img
              className="login-icon"
              src={google}
              alt="Google Icon"
              onClick={()=>{
                console.log('hello')
              }}
            />
            <img
              className="login-icon"
              src={facebook}
              alt="Facebook Icon"
            />
          </div>
          <div className="login-signup" style={{'textAlign':'center' ,'fontSize':'15px' ,'color':'black'}}> <Link to='/signup'>Ou Registrar</Link></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
