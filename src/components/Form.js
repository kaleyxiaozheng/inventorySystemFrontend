import React, { Component } from 'react';
import '../css/Form.css';  
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export class Form extends Component {
  render() {
    return (
      <div className="inputForm">
        <form> 
          <input type={this.props.type} placeholder={this.props.text} onSubmit={this.props.handler} />
        </form>
      </div>
    );
  }
}
