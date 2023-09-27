import React from 'react';

const SecondSection = ({ password, setPassword, rePassword, setRePassword ,isErrorPassword ,message}) => {
  return (
    <div className="register-second-section">
       <div className="form-group">
            <label className="label" htmlFor="password-register">
              Senha
            </label>
            <input
              className="input-field"
              placeholder="Digite Senha"
              type="password"
              id="password-register"
              value ={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="repassword-register">
              Confirmar Senha
            </label>
            <input
              className="input-field"
              placeholder="Digite Senha "
              type="password"
              id="repassword-register"
              value ={rePassword}
              onChange={(e)=>setRePassword(e.target.value)}
            />
          </div>

          {isErrorPassword &&           
          <div  style={{color:"red" ,textAlign:"center"}}>
            <span>{message}</span>
          </div>}
    </div>
  );
};

export default SecondSection;
