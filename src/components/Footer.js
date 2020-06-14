import React from 'react';
import '../css/Footer.css';
import adbLogo from '../logo/ADBLogo.png';

export const Footer = () => (
  <div className="footArea">
    <div className="leftFooter"></div>
    <div className="middleFooter">
      <img className="adbLogo" src={adbLogo} />
      <h5 className="adbName">ADB Company</h5>
    </div>
    <div className="rightFooter"></div>
  </div>
)   