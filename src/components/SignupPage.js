import React from 'react';
import '../css/SignupPage.css';
import { Link } from "react-router-dom";

export const SignupPage = () => (
  <div className="bodyArea signupArea">
    <Link to="/" ><h3>sign up</h3></Link>
    <Link to="/" >back</Link>
  </div>
)