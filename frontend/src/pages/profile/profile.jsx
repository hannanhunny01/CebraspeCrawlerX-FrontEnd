
import Navbar from "../../components/navbarUser/navbarUser";

import ProfileCard from "../../components/profile/profileCard/profileCard";
import MessageCard from "../../components/profile/messageCard/messageCard";
import './profile.css'
function Profile(){


return(
    <div>
    <div >
        <Navbar/>       
    </div>



    <div className="main-body-userprofile">

    <div className="main-body-firstColumn">  <ProfileCard/>   </div> 

       <div  className="main-body-secondColumn">    <MessageCard/> </div>
   
    </div>

    </div>
);


}

export default Profile;