import React from "react";
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">
                        I'm
                        <span className="introName"> Shamit Dholakiya</span><br />
                    </span>
                    
                <p className="introPara">Software Developer</p>

                <p className="introDesc">I enjoy making code easy to understand and use, turning complex ideas into simple, effective solutions.</p>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/> Hire Me</button></Link>
            </div>
        </section>
    )
}

export default Intro;