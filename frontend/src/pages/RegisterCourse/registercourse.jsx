import Navbar from "../../components/navbarUser/navbarUser";
import Card from "../../components/cardVestibular/card";
import './registercourse.css'
import NavItems from "../../components/navitems/navitems";
import PasItems from "../../components/pasitems/pasitems";
function RegisterCoursePage(){


    return(
  <div>
    <Navbar/>
    <div className="main-register-nav-items"><NavItems/></div>
    

    <div className="main-register-course">
     <div className="main-register-cards"> 
     
   
   
    
    <PasItems/>
     </div>

     </div>

  </div>

    )
}

export default RegisterCoursePage