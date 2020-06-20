import React from "react";
import "../css/Footer.css";
import adbLogo from "../logo/ADBLogo.png";

export const Footer = () => (
  <footer>
    <img className="flexbox-item logo" src={adbLogo}></img>
    <h5 className="flexbox-item title">ADB Company</h5>
  </footer>
);
