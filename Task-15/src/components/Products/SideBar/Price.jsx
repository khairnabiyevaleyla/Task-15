import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const Price = () => {
  return (
    <div className="border-b border-[#E5E5E5] py-5">
      {" "}
      <SideBarTitle heading="Price" />
      <div className="side_bar_content_price">
        <input
          type="range"
          className="form-range"
          min="0"
          max="1000"
          step="0.5"
          id="customRange3"
        />
      </div>
    </div>
  );
};

export default Price;
