import React, { Component } from 'react';
import '../css/Signup.css';
import {Link} from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
            <div className="bodyArea signupArea">
                <Link to="/" ><h3>sign up</h3></Link>
                <Link to="/" >back</Link>
            </div>
        );
    }
}