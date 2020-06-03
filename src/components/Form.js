import React, { Component } from 'react';
import '../css/Form.css';  

export class Form extends Component {
  render() {
    return (
      <div className="inputForm">
        <form> 
          <input type={this.props.type} placeholder={this.props.text} />
        </form>
      </div>
    );
  }
}
