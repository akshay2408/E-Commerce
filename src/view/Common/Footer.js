import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "white",
    backgroundColor: "black",
    margin: "5px",
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "black",
      boxShadow: "none",
    },
  },
  footer: {
    backgroundColor: "antiquewhite",
    height: "17vh",
    marginTop: "auto",
  },
  divisionfooter: {
    textAlign: "justify",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  usefulink: {
    color: "black",
    textDecoration: "none",
    fontSize: "15px",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item s={3} className={classes.divisionfooter}>
        <h5>Useful Links</h5>
        <Link to="/" className={classes.usefulink}>
          Contact us
        </Link>
        <br />
        <Link to="/" className={classes.usefulink}>
          About us
        </Link>
        <br />
        <Link to="/" className={classes.usefulink}>
          Terms & Conditions
        </Link>
        <br />
        <Link to="/" className={classes.usefulink}>
          FAQ
        </Link>
      </Grid>
      <Grid item s={3} className={classes.divisionfooter}>
        <h5>Experience Our App On Mobile</h5>
        <Button className={classes.buttons}>Google Play</Button>
        <Button className={classes.buttons}>App Store</Button>
      </Grid>
      <Grid item s={3} className={classes.divisionfooter}>
        <h5>Keep In Touch</h5>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </Grid>
      <Grid item s={3} className={classes.divisionfooter}>
        <h5>
          <b>100% original</b> guaranteed product
        </h5>
        <h5>
          <b>Return within 30 days</b>of recieving your order
        </h5>
      </Grid>
    </Grid>
  );
}
