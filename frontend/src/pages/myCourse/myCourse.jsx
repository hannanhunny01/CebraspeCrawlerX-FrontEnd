import Navbar from "../../components/navbarUser/navbarUser";
import './myCourse.css'
import NavItems from "../../components/navitems/navItems";



import MyConItems from "../../components/myItems/myConItems/myConItems";
import MyPasItems from "../../components/myItems/myPasItems/myPasItems";
import MyVestItems from "../../components/myItems/myVestItems.jsx/myVestItems";
import { useState } from "react";
function MyCoursePage(){
    
  const [selectedComponent, setSelectedComponent] = useState(0);
  
  const items = [<MyPasItems/>,<MyVestItems/>,<MyConItems/>]


    return(
  <div>
    <Navbar/>
    <div className="main-my-nav-items">
      <NavItems
                    setSelectedComponent={setSelectedComponent}
                       
    />
    </div>
    

    <div className="main-my-course">
     <div className="main-my-cards"> 
     
   
    {items[selectedComponent]}
    
  
     </div>

     </div>

  </div>

    )
}

export default MyCoursePage