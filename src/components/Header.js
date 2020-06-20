import React from "react";
import "../css/Header.css";
import { LabelButtonRouter } from "./Button";
import invenLogo from "../logo/InvenLogo.png";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="flexbox-container">
    <div className="flexbox-container container-1"></div>
    <div className="flexbox-container container-2">
      <div className="item-1">
        <a href="/">
          <img className="flexbox-item logo" src={invenLogo} />
        </a>
      </div>
      <div className="header-item-2">
        <Link className="flexbox-item title" to="/">
          <h3>AIMS</h3>
        </Link>
      </div>
    </div>
    <div className="flexbox-container container-3">
      <div className="header-item-3">
        <LabelButtonRouter text="labelTitle" label="Login" path="/login"></LabelButtonRouter>
      </div>
      <div className="header-item-3">
        <LabelButtonRouter text="labelTitle" label="Sign up" path="/signup"></LabelButtonRouter>
      </div>
    </div>
  </div>
);
