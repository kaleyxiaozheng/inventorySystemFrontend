import React from "react";
import "../css/Header.css";
import { LabelButtonRouter } from "./Button";
import invenLogo from "../logo/InvenLogo.png";
import { Link } from "react-router-dom";

export const Header = (props) => (
  <div className="flexbox-container">
    <div className="flexbox-container header-container-1"></div>
    <div className="flexbox-container header-container-2">
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
    <div className="flexbox-container header-container-3">
      <div className="header-item-3">
        {props.username? <div style={{margin:'10%', marginRight:10}}>{props?.username}</div> :<LabelButtonRouter text="labelTitle" label="Login" path="/login"></LabelButtonRouter>}
      </div>
      <div className="header-item-3">
        {props.username? <LabelButtonRouter text="labelTitle" label="Sign out" path="/login"></LabelButtonRouter> :<LabelButtonRouter text="labelTitle" label="Sign up" path="/signup"></LabelButtonRouter>}
      </div>
    </div>
  </div>
);
