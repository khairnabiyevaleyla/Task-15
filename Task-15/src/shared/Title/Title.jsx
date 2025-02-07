import React from "react";

const Title = ({ heading, desc }) => {
  return (
    <div className="text-center mt-20 mb-10">
      <h2 className="text-[30px] text-[#111111] font-medium ">{heading}</h2>
      <p className="text-[15px] text-[#555555] font-normal">{desc}</p>
    </div>
  );
};

export default Title;
