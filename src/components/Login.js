import React, { Component } from 'react';
import '../css/Login.css';
import { Form } from "./Form";
import { LabelTitle } from "./Label";
import { SubmitButtonRouter, LabelButtonRouter } from './Button';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};

export class Login extends Component {
    
    state = initialState

    // handleChange = event => {
    //     const isCheckbox = event.target.type === "checkbox";
    //     this.setState({
    //         [event.target.username]: isCheckbox
    //             ? event.target.checked
    //             : event.target.value
    //     });
    // };

    // validate = () => {
    //     let usernameError = "";
    //     let passwordError = "";

    //     if (isNaN(this.state.username)) {
    //         usernameError = "User Name can not be empty";
    //         passwordError = "Password can not be empty";
    //     }

    //     if (usernameError) {
    //         this.setState({ usernameError });
    //         return false;
    //     }

    //     if (passwordError) {
    //         this.setState({ passwordError });
    //         return false;
    //     }
    //     return true;
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if (!isValid) {
    //         console.log(this.state);
    //     }
    //     console.log(this.state);
    // };

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
                        <div className="infoLabel">
                            <LabelTitle text="infoLabel" label="User Name"></LabelTitle>
                        </div>
                        <div className="formLabel">
                            <Form type="text" text="User Name" value={this.state.username} ></Form>
                        </div>
                        <div className="errorLabel">
                            {this.state.usernameError}
                        </div>
                        <div className="infoLabel">
                            <LabelTitle text="infoLabel" label="Password"></LabelTitle>
                        </div>
                        <div className="formLabel">
                            <Form type="password" text="Password" value={this.state.password} ></Form>
                        </div>
                        <div className="errorLabel">
                            {this.state.passwordError}
                        </div>
                        <div className="checkboxArea">
                            <div className="checkboxLabel">
                                <Form type="checkbox"></Form>
                            </div>
                            <div className="checkboxTitle">
                                <LabelTitle text="infoLabel" label="Remember me"></LabelTitle>
                            </div>
                        </div>
                        <div className="buttonLabel">
                            {/* <SubmitButtonRouter text="submitButton" label="Submit" path="/Submit" ></SubmitButtonRouter> */}
                            <Form type="submit" text="Submit"></Form>
                        </div>
                        <div className="forgetLabel">
                            <div className="left"></div>
                            <div className="right">
                                <div className="forgetTitle">
                                    <LabelTitle label="Forget"></LabelTitle>
                                </div>
                                <div >
                                    <LabelButtonRouter text="passwordTitle" label="password?" path="/ForgetPassword"></LabelButtonRouter>
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