import React, { useState } from 'react';
import CountdownTimer from '../../countDownTimer/countDown';
const ThirdSection = ({phone ,code ,setCode ,timer ,setTimer }) => {
  
  return (
    <div className="register-third-section">
       <div className="form-group">
            <span>Foi Enviado Codigo de 6 digitos no Seguinte Email :- </span> <br/>
            
          <div style={{'textAlign':'center' ,fontWeight:'600'}}>  <span > {phone} </span> <br/></div>
            {timer && <span style={{"display":"flex"}}>Tempo Restante :   <CountdownTimer timerName={"registerAccount"}/> </span>}

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
