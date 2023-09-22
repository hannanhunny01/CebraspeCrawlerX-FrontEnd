
import Navbar from "../../components/navbarUser/navbarUser";

import ProfileCard from "../../components/profile/profileCard/profileCard";
import MessageCard from "../../components/profile/messageCard/messageCard";
import PasswordCard from "../../components/profile/password/password";
import './profile.css'
import { ItemProvider } from "../../Context/itemContext";
function Profile(){


return(
    <ItemProvider>
    <div>
    <div >
        <Navbar/>       
    </div>


   
    <div className="main-body-userprofile">
    <div className="main-body-firstColumn">  <ProfileCard/>     </div> 


       <div  className="main-body-secondColumn">    <MessageCard/> 
       <PasswordCard/>
       </div>
   
    </div>
   
       

    </div>
    </ItemProvider>
);


}

export default Profile;