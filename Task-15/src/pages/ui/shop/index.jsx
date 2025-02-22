import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../../shared/Banner/Banner";
import Title from "../../../shared/Title/Title";
import Categories from "../../../components/Category/Categories";
import Products from "../../../components/Products/index";

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Banner link="/shop" page="Shop" title="Shop" />
      <Title
        heading="You Might Like"
        desc="Here’s some of our most popular products people are in love with."
      />
      <Categories />

      {sessionStorage.getItem("token") && <Products />}
    </div>
  );
};

export default Shop;
