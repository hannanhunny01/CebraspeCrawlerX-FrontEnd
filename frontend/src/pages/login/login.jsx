import React, { useState ,useContext } from "react";
import Navbar from "../../components/Navbar/navbar";
import facebook from "../../assets/icons/facebookicon.png"
import google from "../../assets/icons/googleicon.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../Context/userContext";
 
import "./login.css";

const LoginPage = () => {
  //
  const [token, setToken] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = () => {
    if (username === "user123" && password === "pass123") {
      console.log("Login successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };
 
  
  const postData = async() =>{
    try{
    const response = await axios.post("http://localhost:3000/api/user/login",{email:email ,password:password})
    console.log(response.status)
    if (response.status == 200){
     setToken(response.data.token)
    console.log(response.data.token)
     alert("login SucessFul")
    }else{
      alert("invalid Credentials")

    }
  }
    catch(error){
      console.log(error)
    }

  }

   



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
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
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
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button className="login-button" onClick={postData}>
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
