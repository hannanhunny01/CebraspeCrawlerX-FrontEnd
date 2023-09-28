import React, { useState ,useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import facebook from "../../assets/icons/facebookicon.png"
import google from "../../assets/icons/googleicon.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  //
  const [token, setToken] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()


  useEffect(() => {
    if (token) {
navigate('/items')    } 
  }, [token]);

   
 const postData = async ()=>{

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email: email,
      password: password
    })
  };

   try{
    
    const response = await fetch("http://localhost:3000/api/user/login", requestOptions);
    const data = await response.json()

    if (response.ok){
      setToken(data.token);
      alert("Login SucessFul");
      navigate('/items')

    }else if(response.status === 401){
      alert(data.message);
    }else{
      alert("Error")
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
          <div className="login-forgotpassword">   <Link to="/forgotpassword"> Esqueceu Senha?</Link></div>
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
