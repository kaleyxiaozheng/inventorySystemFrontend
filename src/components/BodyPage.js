import React from "react";
import "../css/BodyPage.css";
import clientLogo from "../logo/adbLogo.jpeg";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const BodyPage = () => (
  <React.Fragment>
    <Header/>
  <div className="container">
    <img className="body-logo" src={clientLogo} />
  </div>
  <Footer/>
  </React.Fragment>
);
