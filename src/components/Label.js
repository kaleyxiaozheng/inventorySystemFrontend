import React, { Component } from 'react';
import '../css/Label.css';

export class LabelTitle extends Component {
  render() {
    return (
      <div className="labelTitle">
        <label className={this.props.text}>{this.props.label}</label>
      </div>
    );
  }
}
