import React from 'react';

const SecondSection = ({ password, setPassword, rePassword, setRePassword }) => {
  return (
    <div className="register-second-section">
       <div className="form-group">
            <label className="label" htmlFor="password-register">
              Password
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
              Re-enter Password
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
    </div>
  );
};

export default SecondSection;
