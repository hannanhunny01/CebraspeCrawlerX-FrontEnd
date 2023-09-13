import React from 'react';
import './profileCard.css'; // Import your CSS file here
import { useState } from 'react';
import profileImage from '../../../assets/profile.jpg';
import newProfileImage from '../../../assets/newProfile.jpg';
function ProfileCard() {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleImageClick = () => {
      setIsClicked(!isClicked);
    };
  
    const handleImageHover = () => {
      setIsHovered(!isHovered);
    };
  return (
    <div className="profileCard">
      <div>
      <img
          id="profileimage"
          src={isClicked ? newProfileImage : profileImage}
          alt="Profile"
          onClick={handleImageClick}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHover}
        />      </div>

      <div className="profilecard-container">
        <header>Minhas Informacoes</header>

        <div>
          <label htmlFor="nameholder"> Nome</label>
          <input
            className="nameholder"
            type="text"
            placeholder="Enter your name"
            disabled
            value={"Abdul Hannan"}

          />
        </div>

        <div>
          <label htmlFor="zapholder"> Meu Whatsapp</label>
          <input
            className="zapholder"
            type="text"
            placeholder="Enter your Whatsapp number"
            disabled
            value={"(61)98625-0932"}

          />
        </div>

        <div>
          <label htmlFor="emailholder"> Meu Email</label>
          <input
            className="emailholder"
            type="text"
            placeholder="Enter your email"
            value={"Hannanhoney5000@gmail.com"}
            disabled
          />
        </div>

        <div>
          <label htmlFor="telholder"> Meu Telegram</label>
          <input
            className="telholder"
            type="text"
            placeholder="Enter your Telegram username"
            disabled
            value={"Hannanhunny01"}

          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
