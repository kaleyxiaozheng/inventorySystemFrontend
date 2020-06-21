import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "../css/Card.css";

export class DashboardCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <p>Card</p>
      </div>
    );
  }
}
