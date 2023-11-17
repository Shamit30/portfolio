import React from "react";
import "./footer.css"

const Footer = () =>{
    return(
        <footer className="footer">
      <div className="footerContent">   
        <p className="footerDesc">SHAMIT DHOLAKIYA</p>
        <div className="footerLinks">
          <a href="https://in.linkedin.com/in/shamit30" target="_blank" className="linkOption" ><p className="footerLink">LinkedIn</p></a>
          <a href="https://www.instagram.com/shamit_dholakia" target="_blank" className="linkOption"><p className="footerLink">Instagram</p></a>
          <a href="https://github.com/shamit30" target="_blank" className="linkOption"><p className="footerLink">GitHub</p></a>
        </div>
      </div>
    </footer>
    )
}

export default Footer;