import React from "react";
import "../../assets/Styles/navbar.css";

function NavLinks (){
    return(
        <ul className="nav-links-ul">
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/">Artículos más recientes</a>
            </li>
            <li>
                <a href="/">Categorías</a>
            </li>
        </ul>
    )
}

export default NavLinks;