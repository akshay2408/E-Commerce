import React from "react";
import { Grid } from "@material-ui/core";
import shoes from "../../images/shoes.jpg";
import mensFashionPhotograpgy from "../../images/mensFashionPhotograpgy.jpg";
import ProductCategory from "../Category/ProductCategory";
import "./style.css";
import ProductOptions from "../Common/ProductOptions";

const Home = ({ newData }) => {
  return (
    <div style={{ marginTop: "8px" }}>
      <ProductOptions newData={newData} />
      <Grid container>
        <Grid item xs={4}>
          <img
            className="imageArea"
            alt=" Fashion Photograpgy"
            src={mensFashionPhotograpgy}
          />
        </Grid>
        <Grid item xs={4} className="boxShadow-Content" />
        <Grid item xs={4}>
          <img className="imageArea" alt="Shoes" src={shoes} />
        </Grid>
      </Grid>
      <ProductCategory newData={newData} />
    </div>
  );
};
export default Home;
