import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import ProductOptions from "../Common/ProductOptions";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../redux/ActionsFolder/Action";
import { useParams } from "react-router";
import TextField from "@material-ui/core/TextField";
import { addToCart } from "../../redux/ActionsFolder/CartAction";
import { addToWishlist } from "../../redux/ActionsFolder/WishListAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  selectedProductImg: {
    height: "100%",
    width: "100%",
  },
  gridImg: {
    width: "100%",
    height: "100%",
  },
  product: {
    height: "70vh",
    width: "100%",
    objectFit: "fill",
  },
  avtarColor: {
    backgroundColor: "white",
    color: "black",
    border: "1px solid gray",
  },
  FormTextField: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  gridSelectedProduct: {
    minHeight: "140vh",
  },
  finalAddToCartBTN: {
    backgroundColor: "burlywood",
    marginRight: "12px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "burlywood",
      boxShadow: "none",
    },
  },
  finalAddToCart: {
    backgroundColor: "burlywood",
    margin: "7px",
    padding: "10px",
    width: "6px",
    height: "8vh",
    "&:hover": {
      backgroundColor: "burlywood",
      boxShadow: "none",
    },
  },
  gridCOntainer: {
    width: "100%",
    height: "70vh",
    marginTop: "20px",
  },
  detalsShown: {
    paddingLeft: "35px",
  },
  SizeDiv: {
    display: "flex",
    marginBottom: "20px",
  },
}));

const ProducSelected = (props) => {
  const classes = useStyles();
  const details = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();
  const [delievery, setDelievery] = useState("");
  const ids = useParams();
  let detailedProducts = [];
  console.log(detailedProducts, "hhh");

  details.map(function (e, i) {
    if (e.id === ids.ids) {
      detailedProducts.push(e);
    }
  });

  const onChangeText = (e) => {
    setDelievery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div>
      <ProductOptions />
      {detailedProducts.map((number) => (
        <Grid container className={classes.gridSelectedProduct}>
          <Grid item xs={4} className={classes.gridCOntainer}>
            <img
              src={number.productImage}
              alt="product"
              className={classes.product}
            />
          </Grid>
          <Grid item xs={8} className={classes.detalsShown}>
            <h1>{number.brand}</h1>
            <p>{number.productName}</p>
            <hr />
            <p>
              <strong>Rs. {number.amount} </strong>
            </p>
            <p>Inclusive of all taxes</p>
            <div className={classes.SizeDiv}></div>
            <Button
              className={classes.finalAddToCartBTN}
              onClick={() => dispatch(addToCart(number, props.setCount))}
            >
              Add To Cart
            </Button>
            <Button
              className={classes.finalAddToCartBTN}
              onClick={() =>
                dispatch(addToWishlist(number, props.setWishlistCount))
              }
            >
              Add to Wishlist
            </Button>
            <hr />

            <h3>Product Details</h3>
            <p>
              <b>{number.productName}</b> by {number.brand}
            </p>
            <br />
            <small> {number.material}</small>
            <hr />
            <h3>Terms & Conditions</h3>
            <p>
              100% Original Products
              <br />
              <br />
              Pay on delivery might be available
              <br />
              <br />
              Easy 30 days returns and exchanges
              <br />
              <br />
              Try & Buy might be available
            </p>
            <hr />
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
export default ProducSelected;
