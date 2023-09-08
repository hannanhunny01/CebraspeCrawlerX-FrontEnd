import React from 'react';
import facebook from "../../../assets/icons/facebookicon.png"
import google from "../../../assets/icons/googleicon.png"
const FirstSection = ({ name, email, phone, setName, setEmail, setPhone }) => {
  return (
    <div className="register-first-section">
      <div className="form-group">
            <label className="label" htmlFor="name-register">
              Nome
            </label>
            <input
              className="input-field"
              placeholder="Enter your Name"
              type="name"
              id="name-register"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="label" htmlFor="email-register">
              Email
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="email"
              id="email-register"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="phone-register">
              Phone(whatsapp)
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="email"
              id="phone-register"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div style={{'textAlign':'center','fontSize':'15px'}} >Ou Cadastrar usando</div>
          <div className="signup-icon-container">
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
    </div>
  );
};

export default FirstSection;
