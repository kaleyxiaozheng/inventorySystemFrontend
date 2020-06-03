import React, { Component } from 'react';
import '../css/Login.css';
import { Form } from "./Form";
import { LabelTitle } from "./Label";
import { SubmitButtonRouter, LabelButtonRouter } from './Button';

export class Login extends Component {
    render() {
        return (
            <div className="bodyArea adminArea">
                <div className="adminTop"></div>
                <div className="adminBorder">
                    <div className="innerLeft"></div>
                    <div className="innerCentre">
                        <div className="adminTitle">
                            <h1><LabelTitle label="Sign in"></LabelTitle></h1>
                        </div>
                        <div className="infoLabel">
                            <LabelTitle label="User Name"></LabelTitle>
                        </div>
                        <div className="formLabel">
                            <Form type="text" text="User Name"></Form>
                        </div>
                        <div className="infoLabel">
                            <LabelTitle label="Password"></LabelTitle>
                        </div>
                        <div className="formLabel">
                            <Form type="password" text="Password"></Form>
                        </div>
                        <div className="checkboxArea">
                            <div className="checkboxLabel">
                                <Form type="checkbox"></Form>
                            </div>
                            <div className="checkboxTitle">
                                <LabelTitle label="Remember me"></LabelTitle>
                            </div>
                        </div>
                        <div className="buttonLabel">
                            <SubmitButtonRouter text="submitButton" label="Submit" path="/Signup"></SubmitButtonRouter>
                        </div>
                        <div className="forgetLabel">
                            <div className="left"></div>
                            <div className="right">
                                <div className="forgetTitle">
                                    <LabelTitle label="Forget"></LabelTitle>
                                </div>
                                <div >
                                    <LabelButtonRouter text="passwordTitle" label="password?"></LabelButtonRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="innerRight"></div>
                </div>
                <div className="adminBottom"></div>
                {/* <Link to="/" >back</Link> */}
            </div>
        );
    }
}