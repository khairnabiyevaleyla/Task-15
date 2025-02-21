import React from "react";
import { useRequest } from "../../../services/http";
import ProductCard from "../../../shared/ProductCard/ProductCard";
const AllProducts = () => {
  const { data } = useRequest("products", {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
    },
  });

  return (
    <div className="">
      <div className="flex justify-end items-end mr-[25px]">
        <i className="ri-layout-grid-line text-[23px] cursor-pointer text-[#595959]"></i>
        <i className="ri-layout-grid-2-line  text-[23px] cursor-pointer text-[#595959]"></i>
      </div>
      <div className="grid grid-cols-1 my-5 px-5 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {" "}
        {data?.data?.map((card, index) => (
          <ProductCard
            key={index}
            productname={card.productname}
            regularprice={card.regularprice}
            oldprice={card.oldprice}
            dicounttag={card.dicounttag}
            regulartag={card.regulartag}
            mainimage={`http://localhost:1337${card.mainimage.url}`}
            hoverimage={`http://localhost:1337${card.hoverimage.url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
