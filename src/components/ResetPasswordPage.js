import React from "react";
import { SubTitle } from "./Label";
import "../css/ResetPasswordPage.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const ResetPasswordPage = () => (
  <React.Fragment>
    <Header/>
  <div className="reset-password-container">
    <h1>
      <SubTitle text="infoLabel" label="Reset Password"></SubTitle>
    </h1>
  </div>
   <Footer/>
   </React.Fragment>
);
