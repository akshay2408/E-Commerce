import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { removeFromCart } from "../../redux/ActionsFolder/CartAction";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { UpdateQty, DecreaseQty } from "../../redux/ActionsFolder/CartAction";
import ProductList from "../ListOfProducts/ProductList";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
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
  formControl: {
    minWidth: 60,
  },
}));

const Cart = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let total = 0;

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();

  const cartItems = useSelector((state) => state.Cart.cartItems);

  cartItems.map((e) => {
    total += e.quantity * e.amount;
  });

  const dispatch = useDispatch();

  const onAddressType = (e) => {
    setAddress(e.target.value);
  };
  const onEmailType = (e) => {
    setEmail(e.target.value);
  };
  const onContactType = (e) => {
    setContact(e.target.value);
  };

  const addToCartHandler = () => {
    history.push(`/`);
  };

  const orderHandler = () => {
    alert(
      `Please confirm your details by clicking ok button =>\nYour Address: ${address}\nYour Email: ${email}\nYour Contact Number: ${contact} \nTotal Amount: ${total}`
    );
    setAddress("");
    setEmail("");
    setContact("");
  };

  return (
    <div>
      <ProductList />
      <Grid container className="AddressContainer">
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
      <Grid container className="cart">
        <Grid item xs={8} className="detailOfProductAdded">
          {cartItems.length > 0 ? (
            cartItems.map((val) => (
              <Grid key={val.id} container className="CartProduct">
                <img
                  src={val.productImage}
                  alt="Product"
                  className="ProductIMG"
                />
                <div>
                  <h3 className="heading1">{val.brand}</h3>
                  <p>{val.productName}</p>
                  <p>Total of Rs {val.amount}</p>
                  <div className="quantity">
                    <p className="qty-text"> Qty</p>
                    <button
                      className="qtyBtn"
                      onClick={() => {
                        dispatch(DecreaseQty(val));
                      }}
                    >
                      -
                    </button>
                    <p>{val.quantity}</p>
                    <button
                      className="qtyBtn"
                      onClick={() => {
                        dispatch(UpdateQty(val));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <Button
                    className={classes.cartBtn}
                    onClick={() => {
                      dispatch(removeFromCart(val, props.setCount));
                    }}
                  >
                    Remove from Cart
                  </Button>
                </div>
              </Grid>
            ))
          ) : (
            <div>
              <h3 style={{ marginLeft: "555px" }}>Your Cart is Empty :(</h3>
              <Button
                style={{ marginLeft: "583px" }}
                className={classes.cartBtn}
                onClick={addToCartHandler}
              >
                Add Items
              </Button>
            </div>
          )}
        </Grid>
        <Grid item xs={4} className="productTotal">
          <div className="bottomdiv" />
          <div className="bottomdiv2" />

          <div className="PriceDetail">
            <div className="priceDiv">
              <p>
                <strong>Price Details</strong>
              </p>
              <TableContainer>
                <Table
                  className="table"
                  size="small"
                  aria-label="a dense table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="right">
                        {cartItems.map((val) => (
                          <p>
                            {val.amount}*{val.quantity}
                          </p>
                        ))}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Total no. of product</TableCell>
                      <TableCell align="right">{cartItems.length}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Delievery Charges</TableCell>
                      <TableCell align="right">Free</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Total</TableCell>
                      <TableCell align="right"> {total}</TableCell>
                    </TableRow>
                  </TableBody>
                  <div>
                    <PinDropIcon
                      className="pinIcon"
                      style={{ marginRight: "5px" }}
                    />
                    <TextField
                      id="input-with-icon-grid"
                      value={address}
                      placeholder="Address"
                      onChange={onAddressType}
                      required={true}
                    />
                  </div>
                  <div>
                    <MarkEmailReadIcon style={{ marginRight: "5px" }} />
                    <TextField
                      id="input-with-icon-grid"
                      value={email}
                      placeholder="Email"
                      onChange={onEmailType}
                      required={true}
                      type="email"
                    />
                  </div>
                  <div>
                    <PhoneAndroidIcon style={{ marginRight: "5px" }} />
                    <TextField
                      id="input-with-icon-grid"
                      value={contact}
                      placeholder="Contact number"
                      onChange={onContactType}
                      required={true}
                    />
                  </div>
                  <Button
                    className={classes.cartBtn}
                    disabled={
                      address &&
                      address.length > 0 &&
                      email &&
                      email.length > 0 &&
                      contact &&
                      contact.length > 0
                        ? false
                        : true
                    }
                    onClick={orderHandler}
                  >
                    Place Order
                  </Button>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="bottomdiv2" />
          <div className="bottomdiv" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Cart;
