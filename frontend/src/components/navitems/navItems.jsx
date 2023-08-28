import { NavLink } from "react-router-dom"

import './navItems.css'
function NavItems() {

    return(
    <div className="nav-items">
       <ul>
        <li> <NavLink>Pas</NavLink></li>
        <li>   <NavLink>Vestibular</NavLink></li>
        <li>    <NavLink>Concursos</NavLink></li>
       </ul>
    
    </div> )
}

export default NavItems