import React from "react";

const BodyImages = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-[55px]">
      <div className="w-full md:w-[453px] h-[400px] md:h-[552px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/blog-detail.png?v=1702030764"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-[453px] h-[400px] md:h-[552px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/blog-detail-2.png?v=1702030774"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default BodyImages;
