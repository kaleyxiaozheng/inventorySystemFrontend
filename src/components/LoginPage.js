import React from 'react';
import '../css/LoginPage.css';
import { LoginRouter } from "./Login";
import { SubTitle } from './Label';
import { LabelButtonRouter } from './Button';

export const LoginPage = () => {

  return (
    <div className="bodyArea adminArea">
      <div className="adminTop"></div>
      <div className="adminBorder">
        <div className="innerLeft"></div>
        <div className="innerCentre">
          <div className="adminTitle">
            <h1><SubTitle text="infoLabel" label="Sign in"></SubTitle></h1>
          </div>
          <LoginRouter />
          <div className="forgetLabel">
            <div className="left"></div>
            <div className="right">
              <div className="forgetTitle">
                <SubTitle label="Forget"></SubTitle>
              </div>
              <div >
                <LabelButtonRouter text="passwordTitle" label="password?" path="/resetpassword"></LabelButtonRouter>
              </div>
            </div>
          </div>
        </div>
        <div className="innerRight"></div>
      </div>
      <div className="adminBottom"></div>
    </div>
  );
}