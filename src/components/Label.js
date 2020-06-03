import React, { Component } from 'react';
import '../css/Label.css';

export class LabelTitle extends Component {
  render() {
    return (
      <div className="labelTitle">
        <label>{this.props.label}</label>
      </div>
    );
  }
}
