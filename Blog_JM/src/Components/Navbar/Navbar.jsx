import React from "react";
import NavHamburger from "./NavHamburger";
import NavLaptop from "./NavLaptop";
import "../../assets/Styles/navbar.css";
import logo from "../../Assets/Images/ER.png";

function Navbar(){
    return (
        <nav className="navigation">
            <img src={logo} alt="logo" className="logo-img" />
            
            <NavLaptop/>
            <NavHamburger/>
        </nav>
    )
}

export default Navbar;