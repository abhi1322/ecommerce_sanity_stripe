import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 A-Store All rights reserved</p>
      <p className="icons">
        <BsInstagram />
        <BsTwitter />
      </p>
    </div>
  );
};

export default Footer;
