import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const Sizes = () => {
  const sizes = [
    {
      size: "XS",
    },
    {
      size: "S",
    },
    {
      size: "M",
    },
    {
      size: "L",
    },
    {
      size: "XL",
    },
    {
      size: "XXL",
    },
  ];
  return (
    <div className="border-b border-[#E5E5E5] py-5">
      {" "}
      <SideBarTitle heading="Sizes" />
      <div className="">
        {sizes &&
          sizes.map((name, index) => {
            return (
              <span key={index} className="size">
                {name.size}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Sizes;
