import React, { Component } from 'react';
import axios from "axios";
import '../css/Form.css';
import { SubmitButtonRouter } from './Button';

export class LoginForm extends Component {

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

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      // console.log(this.state)
    } else {
      // console.log(this.state)
    }

  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ 
      [e.target.name]: e.target.value,
      fields });
  }


  render() {
    const {username} = this.state
    const {password} = this.state
    return (
      <div>
        <form onSubmit= {this.contactSubmit.bind(this)}>
          <div className="lableForm">
            <label>User Name</label>
          </div>
          <div >
            <input className="inputForm" type="text" placeholder="User Name" onChange={this.handleChange.bind(this, "username")} name='username' value={this.state.fields["username"] }></input>
            <span className="error">{this.state.errors["username"]}</span>
          </div>
          <div className="lableForm">
            <label>Password</label>
          </div>
          <div ></div>
          <input className="inputForm" type="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} name='password' value={this.state.fields["password"]}></input>
          <span className="error">{this.state.errors["password"]}</span>
          <div className="checkboxForm">
            <input className="checkboxCheck" type="checkbox"></input>
            <label className="rembMe" >Remember me</label>
          </div>
          <div className="submitLabel">
            <input className="submitInput" type="submit" path="/dashboard"></input>
            <SubmitButtonRouter text="labelTitle" label="Submit" path="/dashboard"></SubmitButtonRouter>
          </div>
        </form>
      </div>
    );
  }
}

