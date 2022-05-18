import React, { useState } from "react";
import SearchAppBar from "./view/Common/Navbar";
import Home from "./view/HomePage/Home";
import Footer from "./view/Common/Footer";
import ProductList from "./view/ListOfProducts/ProductList";
import ProducSelected from "./view/SelectedProduct/ProductSelected";
import Cart from "./view/CartPage/Cart";
import Wishlist from "./view/WishlistPage/Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const productData = useSelector((state) => state.userReducer.data);
  const filteredData = productData.filter((val, i) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val?.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val?.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val?.category?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      console.log(val.productName, val.brand, val.category, "hello");
      return val;
    }
  });
  const newData = searchTerm !== "" ? filteredData : productData;
  console.log(newData, "dataa");
  const [count, setCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  return (
    <Router>
      <SearchAppBar
        count={count}
        products={setSearchTerm}
        wishlistCount={wishlistCount}
      />
      <Switch>
        <Route path={`/`} exact>
          {searchTerm !== "" ? (
            <ProductList
              newData={newData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          ) : (
            <Home newData={newData} />
          )}
        </Route>
        <Route path={`/product/:categoryProduct`}>
          <ProductList
            setCount={setCount}
            setWishlistCount={setWishlistCount}
            newData={newData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route path={`/selected-product/:ids`}>
          <ProducSelected
            newData={newData}
            setCount={setCount}
            setWishlistCount={setWishlistCount}
          />
        </Route>
        <Route path="/cart">
          <Cart
            newData={newData}
            setCount={setCount}
            setWishlistCount={setWishlistCount}
          />
        </Route>
        <Route path="/wishlist">
          <Wishlist
            newData={newData}
            setCount={setCount}
            setWishlistCount={setWishlistCount}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
