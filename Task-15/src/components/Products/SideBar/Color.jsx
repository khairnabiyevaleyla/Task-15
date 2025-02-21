import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const Color = () => {
  const colors = [
    {
      color: "#F5F5DC",
    },
    {
      color: "#BEB9B5",
    },
    {
      color: "#000000",
    },
    {
      color: "#408AD1",
    },
    {
      color: "#7B4B39",
    },
    {
      color: "#696969",
    },
    {
      color: "#301934",
    },
    {
      color: "#7ABDB5",
    },
    {
      color: "#A9C0E0",
    },
    {
      color: "#F5F5F5",
    },
    {
      color: "#D7B2BB",
    },
    {
      color: "#008080",
    },
    {
      color: "#FFFFFF",
    },
    {
      color: "#E2C28F",
    },
  ];
  return (
    <div className="border-b border-[#E5E5E5] py-5">
      {" "}
      <SideBarTitle heading="Color" />
      <div className="flex flex-wrap gap-1">
        {colors &&
          colors.map((code, index) => {
            return (
              <span
                key={index}
                className="color"
                style={{ backgroundColor: code.color }}
              ></span>
            );
          })}
      </div>
    </div>
  );
};

export default Color;
