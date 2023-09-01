import React from 'react';

const ThirdSection = ({phone ,code ,setCode}) => {
  const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2, 3)} ${phone.slice(3, 7)}-${phone.slice(7)}`;
  

  return (
    <div className="register-third-section">
       <div className="form-group">
            <span>Foi Enviado Codigo no Whatapp do Seguinte numero </span> <br/>
            <span style={{'textAlign':'center'}}> {formattedPhone} </span>

          </div>

          <div className="form-group">
            <label className="label" htmlFor="codigo-register">
                Codigo
              </label>
            <input
              className="input-field"
              placeholder="Digite Codigo"
              type="number"
              id="codigo-register"
              value ={code}
              onChange={(e)=>setCode(e.target.value)}
            />
          </div>
    </div>
  );
};

export default ThirdSection;
