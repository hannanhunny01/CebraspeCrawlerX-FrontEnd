import React, { useState } from 'react';
import CountdownTimer from '../../countDownTimer/countDown';
const ThirdSection = ({phone ,code ,setCode ,timer ,setTimer }) => {
  const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2, 3)} ${phone.slice(3, 7)}-${phone.slice(7)}`;
  
  return (
    <div className="register-third-section">
       <div className="form-group">
            <span>Foi Enviado Codigo no Whatapp no Seguinte numero </span> <br/>
            <span style={{'textAlign':'center'}}> {formattedPhone} </span> <br/>
            {timer && <span style={{"display":"flex"}}>Tempo Restante :   <CountdownTimer/> </span>}

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
