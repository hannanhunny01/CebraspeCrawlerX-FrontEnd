import Navbar from "../../components/navbarUser/navbarUser";
import Card from "../../components/cardVestibular/card";
import './registercourse.css'
import NavItems from "../../components/navitems/navItems";
import PasItems from "../../components/items/pasitems/pasitems";
import VestItems from "../../components/items/vestitems/vestitems";
import ConItems from "../../components/items/conitems/conItems";
import { useState } from "react";
function RegisterCoursePage(){
    
  const [selectedComponent, setSelectedComponent] = useState(0);
  
  const items = [<PasItems/>,<VestItems/>,<ConItems/>]




    return(
  <div >
    <div className="registercourse-div"> <Navbar/></div>
   
    
    <div className="main-register-nav-items">
      <NavItems
                    setSelectedComponent={setSelectedComponent}
                       
    />
    </div>
    

    <div className="main-register-course">
     <div className="main-register-cards"> 
     
   
    {items[selectedComponent]}
    
  
     </div>

     </div>

  </div>

    )
}

export default RegisterCoursePage