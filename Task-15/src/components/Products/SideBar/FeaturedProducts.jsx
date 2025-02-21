import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const FeaturedProducts = () => {
  const products = [
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_10_1.jpg?v=1724985479",
      hoverimage:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_10_2.jpg?v=1724985479&width=533",
      name: "Double Pendant - 18k Gold",
      regularprice: "360",
      oldprice: "",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_1_049c4815-4d8e-47b9-9e64-b1e0767adb5e.jpg?v=1724983364",
      hoverimage:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_2_0206e18d-6407-4503-afea-ec1967be068c.jpg?v=1724983365&width=533",
      name: "Bar Earrings in 18k Rose Gold",
      regularprice: "180",
      oldprice: "200",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_1_750abfc7-9ad5-4307-9375-384f51b8aa4b.jpg?v=1724983138",
      hoverimage:
        "https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_2_de210211-bb82-43a2-9217-b60696ffc548.jpg?v=1724983138",
      name: "Earrings in Gold with Diamonds",
      regularprice: "150",
      oldprice: "",
    },
  ];
  return (
    <div className="border-b border-[#E5E5E5] py-5">
      <SideBarTitle heading="Featured Products" />
      {products &&
        products.map((product, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center gap-2 mb-2"
            >
              <div className="featured-main-image relative w-[200px] h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover transition duration-300 ease-in-out"
                />
                <div className="featured-hover-image absolute top-0 left-0 w-full h-full bg-transparent opacity-0 hover:opacity-100 transition duration-300">
                  <img
                    src={product.hoverimage}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[70%]">
                <h5 className="text-[12px]">{product.name}</h5>
                <ul className="flex text-[#FEC735] text-[12px]">
                  {[...Array(5)].map((_, idx) => (
                    <li key={idx}>
                      <i className="ri-star-fill"></i>
                    </li>
                  ))}
                </ul>
                <p className="text-[#111111] text-[14px] font-medium">
                  ${product.regularprice}
                  {product.oldprice && (
                    <span className="text-[#595959] text-[12px] line-through ml-2">
                      ${product.oldprice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FeaturedProducts;
