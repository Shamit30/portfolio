import React from "react";
import Instagramicon from "../../assets/instagram.png";
// import LinkdInIcon from "../../assets/linkdin.png";
// import GithubIcon from "../../assets/github.icon"
const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out form to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Enter Your Name" />
                    <input type="email" className="email" placeholder="Enter Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button className="submitBtn" type="submit" value="send" >Submit</button>
                    <div className="links">
                    <img src={Instagramicon} alt="instagram" className="link" />
                    <img src={Instagramicon} alt="linkdin" className="link" />
                    <img src={Instagramicon} alt="github" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;