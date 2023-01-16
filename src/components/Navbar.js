import React from "react"
import {Link} from "react-router-dom"

import img1 from "../images/ovb_logo.png"

export default function Navbar(){
    return (
        <div className="full--navbar">
        
        <Link to="/"> <img src={img1} alt="" className="nav--logo" /> </Link>
        
            <nav className="list--items">
                <ul className="ul">
                    <li>
                        <Link to="/Sluzby">Služby</Link>
                    </li>
                    <li>
                        <Link to="/Vzdelavanie">Vzdelávanie</Link>
                    </li>
                    <li>
                        <Link to="/Dotaznik">Dotazník</Link>
                    </li>
                    <li>
                        <Link to="/Referencie">Referencie</Link>
                    </li>
                    <li>
                        <Link to="/Clanky">Články</Link>
                    </li>
                    <li>
                        <Link to="/Kariera">Kariéra</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}