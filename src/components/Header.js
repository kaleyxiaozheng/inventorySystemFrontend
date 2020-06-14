import React from 'react';
import '../css/Header.css';
import { LabelButtonRouter } from './Button';
import invenLogo from '../logo/InvenLogo.png';
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="headerArea">
    <div className="leftHeader"></div>
    <div className="centreHeader">
      <div>
        <a href="/">
          <img className="invenLogo" src={invenLogo} />
        </a>
      </div>
      <div className="invenTitle">
        <Link to="/" ><h3>AIMS</h3></Link>
      </div>
    </div>
    <div className="rightHeader">
      <LabelButtonRouter text="labelTitle" label="Login" path="/login"></LabelButtonRouter>
      <LabelButtonRouter text="labelTitle" label="Sign up" path="/signup"></LabelButtonRouter>
    </div>
  </div>
)