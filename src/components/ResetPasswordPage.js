import React from 'react';
import '../css/Login.css';
import { SubTitle } from './Label';

export const ResetPasswordPage = () => (
  <div className="bodyArea adminArea">
    <div className="adminTop"></div>
    <div className="adminBorder">
      <div className="innerLeft"></div>
      <div className="innerCentre">
        <div className="adminTitle">
          <h1><SubTitle text="infoLabel" label="Reset Password"></SubTitle></h1>
        </div>
      </div>
      <div className="innerRight"></div>
    </div>
    <div className="adminBottom"></div>
  </div>
)