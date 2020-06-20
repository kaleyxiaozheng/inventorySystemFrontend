import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class LabelButton extends Component {
  render() {
    const history = this.props.history;

    return (
      <Button className={this.props.text} onClick={() => history.push(this.props.path)}>
        {this.props.label}
      </Button>
    );
  }
}

class SubmitButton extends Component {
  render() {
    const history = this.props.history;

    return (
      <Button className={this.props.text} type="submit" variant="contained" color="primary" onClick={this.props.login} disabled={this.props.checkValue}>
        {this.props.label}
      </Button>
    );
  }
}

export const LabelButtonRouter = withRouter(LabelButton);
export const SubmitButtonRouter = withRouter(SubmitButton);
