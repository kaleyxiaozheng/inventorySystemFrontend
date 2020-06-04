import React, { Component } from 'react';
import '../css/Form.css';

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

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "User Name can not be empty";
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
      console.log(this.state)
    } else {
      console.log(this.state)
    }

  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.contactSubmit.bind(this)}>
          <div className="lableForm">
            <label>User Name</label>
          </div>
          <div >
            <input className="inputForm" type="text" placeholder="User name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}></input>
            <span className="error">{this.state.errors["name"]}</span>
          </div>
          <div className="lableForm">
            <label>Password</label>
          </div>
          <div ></div>
          <input className="inputForm" type="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}></input>
          <span className="error">{this.state.errors["password"]}</span>
          <div className="checkboxForm">
            <input className="checkboxCheck" type="checkbox"></input>
            <label className="rembMe" >Remember me</label>
          </div>
          <div className="submitLabel">
            <input className="submitInput" type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

