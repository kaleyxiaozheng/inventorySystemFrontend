
import React, { Component } from 'react';
import axios from "axios";
import '../css/Login.css';
import { SubmitButtonRouter } from './Button';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "User name can not be empty";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password can not be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
      fields
    });
  }

  login = () => {
    console.log(this.state.fields["username"], this.state.fields["password"]);

  }

  render() {
    return (
      <div>
        <div className="lableForm">
          <label>User Name</label>
        </div>
        <div >
          <input className="inputForm" type="text" placeholder="User Name" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]}></input>
          {/* <span className="error">{this.state.errors["username"]}</span> */}
        </div>
        <div className="lableForm">
          <label>Password</label>
        </div>
        <div ></div>
        <input className="inputForm" type="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}></input>
        {/* <span className="error">{this.state.errors["password"]}</span> */}
        <div className="checkboxForm">
          <input className="checkboxCheck" type="checkbox"></input>
          <label className="rembMe" >Remember me</label>
        </div>
        <div className="submitLabel">
          <SubmitButtonRouter text="labelTitle" label="Submit" login={this.login} ></SubmitButtonRouter>
        </div>
      </div>
    );
  }
}