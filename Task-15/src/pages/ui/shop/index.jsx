import React from "react";
import Banner from "../../../shared/Banner/Banner";
import Title from "../../../shared/Title/Title";
import Categories from "../../../components/Category/Categories";
import Products from "../../../components/Products/index";

const Shop = () => {
  return (
    <div>
      <Banner link="/shop" page="Shop" title="Shop" />
      <Title
        heading="You Might Like"
        desc="Here’s some of our most popular products people are in love with."
      />
      <Categories />
      <Products />
    </div>
  );
};

export default Shop;
