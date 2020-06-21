import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    minHeight: 250,
    borderRadius: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "50px",
  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "40px",
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {props.cardTitle}
          </Typography>
          <Typography className={classes.number} gutterBottom variant="h5" component="h2">
            number
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
