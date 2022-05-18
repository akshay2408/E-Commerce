import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
import { Badge } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navcolor: {
    backgroundColor: "burlywood",
  },
  iconsForOptions: {
    display: "flex",
  },
  iconsMargin: {
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "14px",
    textAlign: "center",
    cursor: "pointer",
  },
  title: {
    marginRight: 50,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  badge: {
    backgroundColor: "black",
    padding: "0.25rem 1rem",
    borderRadius: "25px",
    marginLeft: "1rem",
    fontWeight: "bold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const history = useHistory();

  const goToCart = () => {
    history.push("/cart");
  };
  const goToWishlist = () => {
    history.push("/wishlist");
  };

  return (
    <div>
      <AppBar position="static" className={classes.navcolor}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ShopCart
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => props.products(e.target.value)}
            />
          </div>
          <div className={classes.iconsForOptions}>
            <div className={classes.iconsMargin} onClick={goToWishlist}>
              <Badge
                badgeContent={props.wishlistCount}
                color="secondary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <FavoriteIcon />
              </Badge>
              <br />
              Wishlist
            </div>
            <div className={classes.iconsMargin} onClick={goToCart}>
              <Badge
                badgeContent={props.count}
                color="secondary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <ShoppingCartIcon />
              </Badge>
              <br />
              Cart
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
