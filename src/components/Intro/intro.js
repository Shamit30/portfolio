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
                        Software Developer
                    </span>
                <p className="introPara">I am a Software Developer</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/> Hire Me</button></Link>
            </div>
            {/* <img src="" alt=""></img> */}
        </section>
    )
}

export default Intro;