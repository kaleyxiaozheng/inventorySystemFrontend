import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

class LabelButton extends Component {
  render() {
    const history = this.props.history;

    return (
    <div >
      <Button className={this.props.text} onClick={() => history.push(this.props.path)}>{this.props.label}</Button>
    </div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    const history = this.props.history;

    return (
    <div >
      <Button className="submitButton" variant="contained" color="primary" onClick={this.props.login}>{this.props.label}</Button>
    </div>
    );
  }
}

export const LabelButtonRouter =  withRouter(LabelButton);
export const SubmitButtonRouter =  withRouter(SubmitButton);