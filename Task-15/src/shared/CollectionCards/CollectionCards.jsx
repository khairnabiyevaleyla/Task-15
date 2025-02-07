import React from "react";

const CollectionCards = ({ title, image, size }) => {
  const cardSize =
    size === "category"
      ? "lg:w-[356px] h-[475px]"
      : size === "type"
      ? "lg:w-[467px] h-[570px]"
      : "lg:w-[477px] h-[636px]";

  return (
    <div className="overflow-hidden">
      <div
        className={`relative w-full ${cardSize} cursor-pointer group overflow-hidden`}
      >
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={title}
        />
        <div className="absolute bottom-5 left-5">
          <p className="text-white text-[20px] font-light tracking-[1.5px] relative border-b-2 border-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCards;
