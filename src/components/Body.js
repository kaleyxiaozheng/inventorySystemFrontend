import React, { Component } from 'react';
import '../css/Body.css';
import clientLogo from '../logo/adbLogo.jpeg';

export class Body extends Component {
    render() {
        return (
            <div className="bodyArea">
                {/* <img className="clientLogo" src={clientLogo} /> */}
                <h1>ADB</h1>
            </div>
        );
    }
}
