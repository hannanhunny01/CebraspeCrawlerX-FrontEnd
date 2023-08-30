import { NavLink } from "react-router-dom";
import './navitems.css';

function NavItems({  setSelectedComponent  }) {
    return (
        <div className="div-container-navitems">
            <ul className="nav-list">
                <li  onClick={()=>setSelectedComponent(0)} >Pas</li>
                <li   onClick={()=>setSelectedComponent(1)}>Vestibular</li>
                <li   onClick={()=>setSelectedComponent(2)}>Concursos</li>
            </ul>
        </div>
    );
}

export default NavItems;
