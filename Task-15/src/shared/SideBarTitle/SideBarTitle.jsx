import React from "react";

const SideBarTitle = ({ heading }) => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="text-[22px] text-[#111111] font-normal">{heading}</h2>
      <i className="ri-arrow-down-s-line text-[30px]"></i>
    </div>
  );
};

export default SideBarTitle;
