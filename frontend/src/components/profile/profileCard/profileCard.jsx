import React, { useContext, useEffect } from 'react';
import './profileCard.css'; // Import your CSS file here
import { useState } from 'react';
import profileImage from '../../../assets/profile.jpg';
import newProfileImage from '../../../assets/newProfile.jpg';
import { ItemContext } from '../../../Context/itemContext';
function ProfileCard() {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const {userName,items,isLoading} = useContext(ItemContext)

    if(isLoading){
      return(
        <div>....Loading</div>
      )
    }

    console.log(items,"dasdsa")
  
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
            value={userName}

          />
        </div>

        <div>
          <label htmlFor="zapholder"> Meu Whatsapp</label>
          <input
            className="zapholder"
            type="text"
            placeholder="Enter your Whatsapp number"
            disabled
            value={items[1].value}

          />
        </div>

        <div>
          <label htmlFor="emailholder"> Meu Email</label>
          <input
            className="emailholder"
            type="text"
            placeholder="Enter your email"
            value={items[2].value}
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
            value={items[0].value}

          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
