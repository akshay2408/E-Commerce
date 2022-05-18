import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import mobile from "../../images/mobile.jpeg";
import yellow from "../../images/yellow.jpg";
import mensFashionPhotograpgy from "../../images/mensFashionPhotograpgy.jpg";
import decor from "../../images/decor.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import kids from "../../images/kids.jpg";
import appliances from "../../images/appliances.jpg";
import beauty from "../../images/beauty.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductsData } from "../../redux/ActionsFolder/Action";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    boxShadow: "1px 1px 20px 1px grey",
    textAlign: "center",
  },
  category: {
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: "20px",
  },
  avtarDiv: {
    margin: "auto",
    color: "black",
    textAlign: "center",
  },
  options: {
    display: "flex",
    textAlign: "center",
  },
  linkToProductPage: {
    color: "black",
    textDecoration: "none",
    textAlign: "center",
  },
}));

export default function ProductCategory() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const availCategory = {
    Mobile: "mobile",
    MenWear: "mensWear",
    Women: "womensWear",
    Beauty: "beauty",
    Electronics: "electronics",
    Home: "homeDecor",
    KidsWear: "kidsWear",
  };

  return (
    <div>
      <h1 className={classes.category}>Category</h1>
      <div className={classes.options}>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.Mobile}`}
            className={classes.linkToProductPage}
          >
            <Avatar alt="Mobiles" src={mobile} className={classes.large} />
            <p>Mobiles</p>
          </Link>
        </div>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.Women}`}
            className={classes.linkToProductPage}
          >
            <Avatar
              alt="Women's Clothing"
              src={yellow}
              className={classes.large}
            />
            <p>Women's</p>
          </Link>
        </div>

        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.MenWear}`}
            className={classes.linkToProductPage}
          >
            <Avatar
              alt="Men's Clothing"
              src={mensFashionPhotograpgy}
              className={classes.large}
            />
            <p>Men's</p>
          </Link>
        </div>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.Home}`}
            className={classes.linkToProductPage}
          >
            <Avatar alt="Home Decor" src={decor} className={classes.large} />
            <p>
              Home
              <br />
              Decor
            </p>
          </Link>
        </div>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.KidsWear}`}
            className={classes.linkToProductPage}
          >
            <Avatar alt="Kids" src={kids} className={classes.large} />
            <p>Kids</p>
          </Link>
        </div>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.Beauty}`}
            className={classes.linkToProductPage}
          >
            <Avatar alt="Beauty" src={beauty} className={classes.large} />
            <p>Beauty</p>
          </Link>
        </div>
        <div className={classes.avtarDiv}>
          <Link
            to={`/product/${availCategory.Electronics}`}
            className={classes.linkToProductPage}
          >
            <Avatar
              alt="Electronics"
              src={appliances}
              className={classes.large}
            />
            <p>Electronics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
