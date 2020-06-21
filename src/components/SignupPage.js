import React from "react";
import "../css/SignupPage.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SignupPage = () => (
  <React.Fragment>
    <Header/>
    <div className="signup-container">
      <div className="item">
        <h3>sign up</h3>
      </div>
      <div className="item">
        <Link to="/">back</Link>
      </div>
    </div>
    <Footer/>
  </React.Fragment>
);
