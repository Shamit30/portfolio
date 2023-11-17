import React, { useRef } from "react";
import "./contact.css";
import LinkdInIcon from "../../assets/linkedin96.png";
import InstagramIcon from "../../assets/instagram96.png";
import GithubIcon from "../../assets/github96.png";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_agv9sx7', 'template_mkz4n2s', form.current, 'gAoHa6x3GczD7MuII')
          .then((result) => {
              e.target.reset();
              alert("Email Sent");
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out form to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Enter Your Name" name='from_name' maxLength={15}/>
                    <input type="email" className="email" placeholder="Enter Your Email" name='from_email' maxLength={35} />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                    <button className="submitBtn" type="submit" value="send" >Submit</button>
                    <div className="links">
                    <a href="https://in.linkedin.com/in/shamit30" target="_blank" className="linkOption"><img src={LinkdInIcon} alt="instagram" className="link"/><p>LinkedIn   </p></a>
                    <a href="https://www.instagram.com/shamit_dholakia" target="_blank" className="linkOption"><img src={InstagramIcon} alt="linkdin" className="link" /><p>Instagram</p></a>
                    <a href="https://github.com/shamit30" target="_blank" className="linkOption"><img src={GithubIcon} alt="github" className="link" /><p>GitHub</p></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;