import React, { Component } from 'react';
import '../css/Login.css';
import { SubmitButtonRouter } from './Button';
import axios from 'axios';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import { InputTitle } from './Label';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      // errors: {}
    }
  }

  // handleValidation = () => {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //   if (!username) {
  //     formIsValid = false;
  //     errors["username"] = "User name can not be empty";
  //   }

  //   if (password) {
  //     formIsValid = false;
  //     errors["password"] = "Password can not be empty";
  //   }

  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = (event) => {

    event.preventDefault();
    console.log(this.state);
    axios 
      .post('http://localhost:5000/login', qs.stringify({username: this.state.username, password: this.state.password}))
      .then(response => {
        console.log(response)

        // go to dashboard if status is 200
        if(response.status === 200){
          const username = response.data.user_name;
          console.log(response.date);
          this.props.history.push(`${username}/dashboard`);
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { username, password } = this.state;
    const { match, location, history } = this.props;
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
          <div className="inputTitle">
            <InputTitle type="required" label="User Name"></InputTitle>
          </div>
          <div >
            <input className="inputForm" type="text" placeholder="User Name" name="username" onChange={this.changeHandler} value={username}></input>
            {/* <span className="error">{this.state.errors["username"]}</span> */}
          </div>
          <div className="inputTitle">
            <InputTitle type="required"  label="Password"></InputTitle>
          </div>
          <div ></div>
          <input className="inputForm" type="password" placeholder="Password" name="password" onChange={this.changeHandler} value={password}></input>
          {/* <span className="error">{this.state.errors["password"]}</span> */}
          <div className="checkboxForm">
            <input className="checkboxCheck" type="checkbox"></input>
            <label className="rembMe" >Remember me</label>
          </div>
          <div className="submitLabel">
            {/* <SubmitButtonRouter text="labelTitle" label="Submit" login={this.login} ></SubmitButtonRouter> */}
            <SubmitButtonRouter text="labelTitle" label="Submit" checkValue={username.length === 0 || password.length === 0}></SubmitButtonRouter>
          </div>
        </form>
      </div>
    );
  }
}

export const LoginRouter =  withRouter(Login);