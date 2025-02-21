import React from "react";
import AllProducts from "./Products/AllProducts";
import Collection from "../Products/SideBar/Collection";
import Availability from "../Products/SideBar/Availability";
import Price from "../Products/SideBar/Price";
import Color from "../Products/SideBar/Color";
import Sizes from "../Products/SideBar/Sizes";
import Tags from "../Products/SideBar/Tags";
import FeaturedProducts from "../Products/SideBar/FeaturedProducts";
import AddBanner from "../Products/SideBar/AddBanner";

const Products = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 my-5">
      <div className="lg:col-span-1 mx-4">
        <Collection />
        <Availability />
        <Price />
        <Color />
        <Sizes />
        <Tags />
        <FeaturedProducts />
        <AddBanner />
      </div>

      <div className="lg:col-span-4 ">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
