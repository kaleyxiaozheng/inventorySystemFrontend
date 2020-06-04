import React, { Component } from 'react';
import '../css/Login.css';
import { LoginForm } from "./Form";
import { LabelTitle } from "./Label";
import { LabelButtonRouter } from './Button';

export class Login extends Component {

    render() {
        return (
            <div className="bodyArea adminArea">
                <div className="adminTop"></div>
                <div className="adminBorder">
                    <div className="innerLeft"></div>
                    <div className="innerCentre">
                        <div className="adminTitle">
                            <h1><LabelTitle text="infoLabel" label="Sign in"></LabelTitle></h1>
                        </div>
                        <LoginForm></LoginForm>
                        <div className="forgetLabel">
                            <div className="left"></div>
                            <div className="right">
                                <div className="forgetTitle">
                                    <LabelTitle label="Forget"></LabelTitle>
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
}