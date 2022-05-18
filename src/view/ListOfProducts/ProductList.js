import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsData } from "../../redux/ActionsFolder/Action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ProductOptions from "../Common/ProductOptions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/ActionsFolder/CartAction";
import { addToWishlist } from "../../redux/ActionsFolder/WishListAction";

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
});

const ProductList = ({
  newData,
  searchTerm,
  setSearchTerm,
  setCount,
  setWishlistCount,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [myClass, setMyClass] = useState("");
  const [myCartClass, setMyCartClass] = useState("");

  useEffect(() => {
    if (window.location.pathname.split("/")[1] !== "") {
      setSearchTerm && setSearchTerm("");
    }
    dispatch(fetchProductsData());
  }, [window.location.pathname]);

  const categoryProduct = useParams();

  let getCategorizedProducts = [];

  newData?.map(function (e, i) {
    if (e.category === categoryProduct.categoryProduct) {
      getCategorizedProducts.push(e);
    }
  });

  const onAdd = (e, number) => {
    if (number.id === e.currentTarget.id) {
      setMyCartClass(number.id);
    }
    number.cartToggle = !number.cartToggle;
    dispatch(addToCart(number, setCount));
  };

  const onWhislist = (e, number) => {
    if (number.id === e.currentTarget.id) {
      setMyClass(number.id);
    }
    number.like = !number.like;
    dispatch(addToWishlist(number, setWishlistCount));
  };
  const data = searchTerm === "" ? getCategorizedProducts : newData;

  return (
    <div style={{ marginTop: "8px" }}>
      <ProductOptions />
      <ul className={classes.ulStyling}>
        <li>
          {data?.map((number) => (
            <Card className={classes.root}>
              <Link
                to={`/selected-product/${number.id}`}
                key={number.id}
                className={classes.linkcolor}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Photographs"
                    height="240"
                    image={number.productImage}
                  />
                  <CardContent className={classes.nameOfProducts}>
                    <Typography>
                      <p className={classes.productlistNAmes}>
                        <b>{number.brand}</b>
                        <br />
                        <small>{number.productName}</small>
                        <br></br>
                        <b>Rs.{number.amount}</b>
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions className={classes.iconimg}>
                <div
                  className={classes.pointer}
                  id={number.id}
                  onClick={(e) => onWhislist(e, number)}
                >
                  {!number.like ? (
                    <FavoriteBorderSharpIcon />
                  ) : (
                    <FavoriteIcon />
                  )}
                </div>
                <div
                  id={number.id}
                  onClick={(e) => onAdd(e, number)}
                  className={classes.pointer}
                >
                  {number.cartToggle ? (
                    <ShoppingCartIcon />
                  ) : (
                    <AddShoppingCartSharpIcon />
                  )}
                </div>
              </CardActions>
            </Card>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default ProductList;
