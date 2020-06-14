import React from 'react';
import '../css/Title.css';

export const SubTitle = (props) => (
  <div className="labelTitle">
    <label className={props.text}>{props.label}</label>
  </div>
)
