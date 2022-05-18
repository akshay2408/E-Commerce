import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  navcolor: {
    backgroundColor: "white",
  },
  productOption: {
    margin: "auto",
    minHeight: "20px",
  },
  btn: {
    marginLeft: "8px",
    marginRight: "8px",
    fontSize: "12px",
  },
}));

export default function ProductOptions() {
  const classes = useStyles();

  const history = useHistory();

  const availCategory = {
    Mobile: "mobile",
    MenWear: "mensWear",
    Women: "womensWear",
    Beauty: "beauty",
    Electronics: "electronics",
    Home: "homeDecor",
    KidsWear: "kidsWear",
  };

  const onHomeClick = () => {
    history.push(`/`);
  };

  const onMobileClick = () => {
    history.push(`/product/${availCategory.Mobile}`);
  };
  const onWomensWearClick = () => {
    history.push(`/product/${availCategory.Women}`);
  };
  const onMensWearClick = () => {
    history.push(`/product/${availCategory.MenWear}`);
  };
  const onHomeDecorClick = () => {
    history.push(`/product/${availCategory.Home}`);
  };
  const onKidsWearClick = () => {
    history.push(`/product/${availCategory.KidsWear}`);
  };
  const onBeautyClick = () => {
    history.push(`/product/${availCategory.Beauty}`);
  };
  const onElectricClick = () => {
    history.push(`/product/${availCategory.Electronics}`);
  };

  return (
    <div>
      <AppBar position="static" className={classes.navcolor}>
        <Toolbar className={classes.productOption}>
          <Typography>
            <Button className={classes.btn} onClick={onHomeClick}>
              Home
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onMobileClick}>
              Mobiles
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onWomensWearClick}>
              Women's
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onMensWearClick}>
              Men's
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onHomeDecorClick}>
              Home Decor
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onKidsWearClick}>
              Kid's
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onBeautyClick}>
              Beauty
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.btn} onClick={onElectricClick}>
              Electronics
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
