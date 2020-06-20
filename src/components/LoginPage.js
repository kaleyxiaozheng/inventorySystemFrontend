import React from "react";
import "../css/LoginPage.css";
import { LoginRouter } from "./Login";
import { SubTitle } from "./Label";
import { LabelButtonRouter } from "./Button";

export const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-container-1"></div>
      <div className="login-container-2">
        <div className="item-1">
          <h1>
            <SubTitle text="infoLabel" label="Sign in"></SubTitle>
          </h1>
        </div>
        <div className="item-2">
          <LoginRouter />
        </div>
        <div className="item-3">
          <div className="item-forget">
            <SubTitle label="Forget"></SubTitle>
          </div>
          <div className="item-password">
            <LabelButtonRouter text="password" label="password?" path="/resetpassword"></LabelButtonRouter>
          </div>
        </div>
      </div>
      <div className="login-container-3"></div>
    </div>
  );
};
