import React from "react";
import NavLinks from "./NavLinks";
import "../../assets/Styles/navbar.css";
import { FaGripLines } from "react-icons/fa";
import { GrClose } from "react-icons/gr"
import { useState } from "react";

function NavHamburger() {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <FaGripLines className="hamburger" onClick={() => setOpen(!open)}/>
    const closeIcon = <GrClose className="hamburger" onClick={() => setOpen(!open)}/>

    return (
        <nav className="nav-mobile">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    )
}

export default NavHamburger;