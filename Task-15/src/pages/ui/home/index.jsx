import React from "react";
import CollectionbyProducts from "../../../components/CollectionbyProducts";
import CollectionbyCategory from "../../../components/CollectionbyCategory";
import CollectionbyType from "../../../components/CollectionbyType";
import Title from "../../../shared/Title/Title";
import BestsellerProducts from "../../../components/Bestseller/BestsellerProducts";
import TrendingProducts from "../../../components/Trending/TrendingProducts";
import Testimonial from "../../../components/Testimonial/Testimonial";
import FollowUs from "../../../components/FollowUs/FollowUs";
import Information from "../../../components/Info/Information";

const Home = () => {
  return (
    <>
      <CollectionbyProducts />
      <Title
        heading="Bestseller Product"
        desc="Our bestselling piece, timeless and elegantly modern."
      />
      <BestsellerProducts />
      <CollectionbyCategory />
      <Testimonial />
      <CollectionbyType />
      <Title
        heading="Trending Now"
        desc="Shop trending jewelry with stylish, modern designs."
      />
      <TrendingProducts />
      <Title
        heading="Follow Us"
        desc="Inspire and let yourself be inspired, from one unique fashion to another."
      />
      <FollowUs />
      <Information />
    </>
  );
};

export default Home;
