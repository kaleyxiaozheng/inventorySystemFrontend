import React, { Component } from "react";
// import { DashboardCard } from "./DashboardCard";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import "../css/DashboardCardPage.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    padding: "50px",
  },
});

export function DashboardCardPage() {
  const classes = useStyles();
  return (
    <Grid container spacing={6} className={classes.gridContainer}>
      <Grid item xs={6}>
        <Card cardTitle="Orders" />
      </Grid>
      <Grid item xs={6}>
        <Card cardTitle="Sales" />
      </Grid>
      <Grid item xs={6}>
        <Card cardTitle="Stocks" />
      </Grid>
      <Grid item xs={6}>
        <Card cardTitle="Shipping" />
      </Grid>
    </Grid>
  );
}
