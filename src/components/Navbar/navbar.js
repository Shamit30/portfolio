import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
const Navbar = () => {
        return (
            <nav className="navbar">
                <img src="" alt="Logo" className="logo" />
                    <div className="desktopMenu">
                        <Link className="desktopListMenuItem">Home</Link>
                        <Link className="desktopListMenuItem">About</Link>
                        <Link className="desktopListMenuItem">Portfolio</Link>
                        {/* <Link className="desktopListMenuItem">Clients</Link> */}
                    </div>
                    <button className="desktopMenuBtn" >
                        <img src={ contactImg } alt="" className="desktopMenuImg" />
                        Contact me
                    </button>
            
            </nav>
        )
}

export default Navbar;