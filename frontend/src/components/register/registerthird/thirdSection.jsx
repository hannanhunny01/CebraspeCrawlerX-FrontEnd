import React from 'react';

const ThirdSection = () => {
  return (
    <div className="register-third-section">
       <div className="form-group">
            <span>Foi Enviado Codigo no Whatapp do Seguinte numero </span> <br/>
            <span style={{'textAlign':'center'}}> (61) 9 9999-9999 </span>

          </div>

          <div className="form-group">
            <label className="label" htmlFor="codigo-register">
                Codigo
              </label>
            <input
              className="input-field"
              placeholder="Enter your email"
              type="number"
              id="codigo-register"
            />
          </div>
    </div>
  );
};

export default ThirdSection;
