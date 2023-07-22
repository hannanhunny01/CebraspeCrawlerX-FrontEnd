import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import './login.css'
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
        <Navbar/>
    
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
        <button className="login-button">Login</button>
      </div>
    </div>

    </div>
  );
};

export default LoginPage;
