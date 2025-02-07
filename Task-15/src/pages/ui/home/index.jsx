import React from "react";
import CollectionbyProducts from "../../../components/CollectionbyProducts";
import CollectionbyCategory from "../../../components/CollectionbyCategory";
import CollectionbyType from "../../../components/CollectionbyType";
import Title from "../../../shared/Title/Title";
const Home = () => {
  return (
    <>
      <CollectionbyProducts />
      <Title
        heading="Bestseller Product"
        desc="Our bestselling piece, timeless and elegantly modern."
      />
      <CollectionbyCategory />
      <CollectionbyType />
      <Title
        heading="Trending Now"
        desc="Shop trending jewelry with stylish, modern designs."
      />
    </>
  );
};

export default Home;
