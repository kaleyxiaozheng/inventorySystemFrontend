
import React, { Component } from 'react';
import '../css/Login.css';
import { SubmitButtonRouter } from './Button';
import axios from 'axios';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import { Redirect } from "react-router";
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
    this.setState({
      redirection:'dashboard'
    })
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

  // login = () => {
  //   console.log(this.state.username, this.state.password);
  //   const axios = require('axios').default;

  //   axios({
  //     method: 'post',
  //     url: '/localhost:3000/login',
  //     data: {
  //       username: this.state.fields["username"],
  //       password: this.state.fields["password"]
  //     }
  //   });
  // }

  render() {
    const { username, password } = this.state;
    const { match, location, history } = this.props;
    if (this.state.redirection ==='dashboard') {
      return (<Redirect to='/dashboard'/>)
    } else {
      return (
        <div>
          <form onSubmit = {this.submitHandler}>
            <div className="lableForm">
              <label>User Name</label>
            </div>
            <div >
              <input className="inputForm" type="text" placeholder="User Name" name="username" onChange={this.changeHandler} value={username}></input>
              {/* <span className="error">{this.state.errors["username"]}</span> */}
            </div>
            <div className="lableForm">
              <label>Password</label>
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
              <SubmitButtonRouter text="labelTitle" label="Submit" ></SubmitButtonRouter>
            </div>
          </form>
        </div>
      );
    }
    
  }
}

export const LoginRouter =  withRouter(Login);