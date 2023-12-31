import React from 'react';
import facebook from "../../../assets/icons/facebookicon.png"
import google from "../../../assets/icons/googleicon.png"
import { Link } from 'react-router-dom';
const FirstSection = ({ name, email, phone, setName, setEmail, setPhone  ,isError , setIsError,message,hasAcepted, setHasAcepting}) => {
  console.log(isError,message)
  return (
    <div className="register-first-section">
      <div className="form-group">
            <label className="label" htmlFor="name-register">
              Nome
            </label>
            <input
              className="input-field"
              placeholder="Escrever Seu Nome"
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
              placeholder="Email"
              type="email"
              id="email-register"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="phone-register">
            Confirmar e-mail 
            </label>
            <input
              className="input-field"
              placeholder="Confirmar e-mail"
              type="email"
              id="phone-register"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <label className="label" htmlFor="terms-check">
          <input
            type="checkbox"
            id="terms-check"
            checked={hasAcepted}
            onChange={(e)=>setHasAcepting(e.target.checked)}
          />
          Aceitar os <Link to="/terms-and-conditions">Termos e Condições</Link>
        </label>
          <div className="form-group">
       
      </div>
          {isError &&  

          <div  style={{color:"red" ,textAlign:"center"}}>
            <span>{message}</span>
          </div>
}



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
     
          </div>
    </div>
  );
};

export default FirstSection;
