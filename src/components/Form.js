import React, { Component } from 'react';
import '../css/Form.css';  
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export class Form extends Component {
  render() {
    return (
      <div className="inputForm">
        <form> 
          <input className={this.props.className} type={this.props.type} placeholder={this.props.text} />
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
