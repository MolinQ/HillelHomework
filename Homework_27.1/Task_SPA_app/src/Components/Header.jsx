import Link from "./ui/Link.jsx";
import React, {useContext} from "react";
import  ChangeColor  from '../feature/ChangeColor/ui/index.jsx'
import {ThemeContext} from "../shared/model/ThemContext.js";
function Header() {
        const [them] = useContext(ThemeContext);
    return (
        <div style={{ borderRadius:"2px", display: "flex", alignItems: "center", justifyContent: "space-between",backgroundColor: them.bgHeader}}>
            <ChangeColor />
            <h1 className='text-color'>Spa App</h1>
            <nav style={{ display: "flex", justifyContent: "space-around", gap: "5rem", paddingRight: "5rem"}}>
                <Link to='/'>Main</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
}

export default Header;