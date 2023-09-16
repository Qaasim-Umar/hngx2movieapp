import React from "react";
import "./Footer.css";
import facebook from "./Vector (3).svg";
import instagram from "./Vector (4).svg";
import twitter from "./Vector (5).svg";
import youtube from "./Vector (6).svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="footertext-flex">
        <p>Condition of use </p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="footer-year">
        &copy; 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </div>
  );
};

export default Footer;
