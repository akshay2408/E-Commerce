import React from "react";
import ProductOptions from "../Common/ProductOptions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { addToCart } from "../../redux/ActionsFolder/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../redux/ActionsFolder/WishListAction";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    margin: "25px",
    boxShadow: "1px 1px 5px 2px rgb(0 0 0 / 20%)",
    display: "inline-block",
    width: "100%",
  },
  ulStyling: {
    listStyle: "none",
  },
  nameOfProducts: {
    backgroundColor: "antiquewhite",
    padding: "1px",
  },
  productlistNAmes: {
    fontSize: "12px",
    marginLeft: "10px",
    textAlign: "left !important",
  },
  iconimg: {
    backgroundColor: "burlywood",
  },
  linkcolor: {
    color: "black",
    textDecoration: "none",
  },
  pointer: {
    cursor: "pointer",
  },
  cartBtn: {
    backgroundColor: "burlywood",
    fontSize: "13px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginRight: "7px",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: "burlywood",
      boxShadow: "none",
    },
  },
});

const Wishlist = (props) => {
  const items = useSelector((state) => state.WishList.wishlistItems);
  console.log(items, "items");
  let Product = [];
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(items, "items2");

  items.map((e) => {
    Product.push(e);
  });
  const addToCartHandler = () => {
    history.push(`/`);
  };

  const classes = useStyles();
  return (
    <div style={{ marginTop: "8px" }}>
      <ProductOptions />
      <ul className={classes.ulStyling}>
        <li>
          {Product.length > 0 ? (
            Product.map((val) => (
              <Card className={classes.root}>
                <Link
                  to={`/selected-product/${val.id}`}
                  key={val.id}
                  className={classes.linkcolor}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Photographs"
                      height="240"
                      image={val.productImage}
                    />
                    <CardContent className={classes.nameOfProducts}>
                      <Typography>
                        <p className={classes.productlistNAmes}>
                          <b>{val.brand}</b>
                          <br />
                          <small>{val.productName}</small>
                          <br></br>
                          <b>Rs. {val.amount}</b>
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions className={classes.iconimg}>
                  <Button
                    onClick={() => dispatch(addToCart(val, props.setCount))}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(removeFromWishList(val, props.setWishlistCount));
                    }}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <div>
              <h3 style={{ textAlign: "center" }}>
                Your Wishlist is empty :(
              </h3>
              <Button
                style={{ marginLeft: "640px" }}
                className={classes.cartBtn}
                onClick={addToCartHandler}
              >
                Add Items
              </Button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Wishlist;
