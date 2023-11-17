import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Contact from '../../assets/contact.png';
import Menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src="" alt="" className="logo" />
                <div className="desktopMenu">
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopListMenuItem" >Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="desktopListMenuItem" >About</Link>
                    {/* <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopListMenuItem" >Portfolio</Link> */}
                </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
                }} >
                    <img src={ Contact } alt="" className="desktopMenuImg" />
                    Contact me
                </button>
                <img src={ Menu } alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                    {/* <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link> */}
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>

                </div>
        </nav>
    )
}

export default Navbar;