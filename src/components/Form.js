import React, { Component } from 'react';
import '../css/Form.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export class LoginForm extends Component {
  render() {
    return (
      <div>
        {/* <form> 
          <input className={this.props.className} type={this.props.type} placeholder={this.props.text} />
        </form> */}

        <form>
          <div className="lableForm">
            <label>User Name</label>
          </div>
          <div >
            <input className="inputForm" type="text" placeholder="User name"></input>
          </div>
          <div className="lableForm">
          <label>Password</label>
          </div>
          <div ></div>
          <input className="inputForm" type="text" placeholder="Password"></input>
          <div className="checkboxForm">
            <input className="checkboxCheck" type="checkbox"></input>
            <label className="rembMe" >Remember me</label>
          </div>
        </form>
      </div>
    );
  }
}

export class InputField extends Component {
  render() {
    return (
      <div>
        <form>
          <TextField className={this.props.className} label={this.props.label} variant="outlined" />
        </form>
      </div>
    );
  }
}
