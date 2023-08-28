import { NavLink } from "react-router-dom";
import './navitems.css';

function NavItems() {
    return (
        <div className="div-container-navitems">
            <ul className="nav-list">
                <li><NavLink to="/">Pas</NavLink></li>
                <li><NavLink to="/vestibular">Vestibular</NavLink></li>
                <li><NavLink to="/concursos">Concursos</NavLink></li>
            </ul>
        </div>
    );
}

export default NavItems;
