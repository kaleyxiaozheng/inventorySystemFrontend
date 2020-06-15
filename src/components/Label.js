import React from 'react';

const SubTitle = (props) => (
  <div className="labelTitle">
    <label className={props.text}>{props.label}</label>
  </div>
)

const InputTitle = (props) => (
  <div>
    <label class={props.type}>{props.label}</label>
  </div>
 )

export {SubTitle, InputTitle};