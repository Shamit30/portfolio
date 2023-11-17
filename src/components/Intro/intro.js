import React, { useState, useEffect } from "react";
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'


const Intro = () => {
    const [text, setText] = useState('Software Developer');
    useEffect(() => {
        const intervalId = setInterval(() => {
          setText((prevText) => (prevText === 'Software Developer' ? 'Self Learner' : 'Software Developer'));
        }, 2000); 
        
        return () => clearInterval(intervalId);
      }, []);

    return (
        <section id="intro">
            <div className="introContent">
                    <span className="hello">Hey There!</span>
                    <span className="introText">
                        I am    
                        <span className="introName"> Shamit Dholakiya</span><br />
                    </span>
                <div className="introPara">{text}</div>
                <p className="introDesc">I enjoy making code easy to understand and use, turning complex ideas into simple, effective solutions.</p>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/> Hire Me</button></Link>
            </div>
        </section>

        
    )
}

export default Intro;