import React from 'react';

const SecondSection = ({ password, setpassword, rePassword, setRePassword }) => {
  return (
    <div className="register-second-section">
       <div className="form-group">
            <label className="label" htmlFor="password-register">
              Password
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="password"
              id="password-register"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="repassword-register">
              Re-enter Password
            </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="password"
              id="repassword-register"
            />
          </div>
    </div>
  );
};

export default SecondSection;
