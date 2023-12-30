import React, { useContext, useState } from 'react';
import './switch.css';
import { UserContext } from '../../../Context/userContext';

import Modal from '../../modal/modal';
import buttonStyles from '../../myItems/styles';


function ToggleSwitch({ method, value }) {

  const [message,setMessage] = useState('');
  const [openModal,setOpenModal] = useState(false);


  const checkValue =()=>{
    if(value===null){
      return true;
    }
    return false
  }
  const [isOn, setIsOn] = useState(value);

  const [token] = useContext(UserContext);
  let name;

  if (method === "Whatsapp") {
    name = "phone";
  } else if (method === "Email") {
    name = "email";
  } else {
    name = "telegram";
  }

  const fetchData = async (updatedIsOn) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "contactMethod": name,
        "newValue": updatedIsOn,
      }),
    };
    const response = await fetch(`${import.meta.env.VITE_HOST}:${import.meta.env.VITE_HOST_PORT}/api/profile/updateNotifications`, requestOptions);
    const data = await response.json();
    setOpenModal(true);
    setMessage(data.message)

    if (!response.ok) {
      setIsOn(false);
    } 
  };

  const handleToggle = () => {
    const updatedIsOn = !isOn; 
    setIsOn(updatedIsOn);
    if(value!==null){ 
    fetchData(updatedIsOn); }
  };

  return (
    <div className="toggle-switch">
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          disabled={checkValue()}
        />
        <span className="slider"></span>
      </label>

      <Modal open={openModal} onClose={()=>setOpenModal(false)}>
            <div style={{ display:"flex",justifyContent:"center"}}>
          <div className='div-modal-notifications'>
          <h2>Mensagem</h2>
          <br />
          <p>{message}</p>
        
          <div  style={buttonStyles.buttonContainer}> 

              <button onClick={()=>setOpenModal(false)} style={buttonStyles.noButton}>Fechar</button>
              
              </div>
          </div>
          </div>
        </Modal>
    </div>
  );
}

export default ToggleSwitch;
