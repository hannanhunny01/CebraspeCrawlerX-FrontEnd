import React, { useContext, useState } from 'react';
import './switch.css';
import { UserContext } from '../../../Context/userContext';

function ToggleSwitch({ method, value }) {

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
    const response = await fetch("http://localhost:3000/api/profile/updateNotifications", requestOptions);

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      alert(data.message);
    } else {
      const data = await response.json();
      console.log(data.message);
      alert(data.message);
      setIsOn(false)
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
    </div>
  );
}

export default ToggleSwitch;
