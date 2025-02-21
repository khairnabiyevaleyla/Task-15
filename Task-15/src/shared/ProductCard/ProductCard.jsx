import React, { useState } from "react";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const ProductCard = ({
  productname,
  mainimage,
  hoverimage,
  regularprice,
  oldprice,
  dicounttag,
  regulartag,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="main-image">
          <img src={mainimage} alt={productname} />
          <div className="hover-image">
            <img src={hoverimage} alt={productname} />
          </div>
          <div className="action-items">
            <ul>
              <li>
                <i className="ri-shopping-bag-line"></i>
              </li>
              <li>
                <i className="ri-heart-line"></i>
              </li>
              <li>
                <i className="ri-scales-line"></i>
              </li>
              <li
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer"
              >
                <i className="ri-search-line"></i>
              </li>
            </ul>
          </div>
          {dicounttag && <span className="product-tag sale">{dicounttag}</span>}
          {regulartag && (
            <span className="product-tag pre-order">{regulartag}</span>
          )}
        </div>
        <div className="body mt-3">
          <p className="text-[16px] font-light text-[#111111]">{productname}</p>
          <ul className="flex text-[#FEC735] text-[14px]">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i className="ri-star-fill"></i>
              </li>
            ))}
          </ul>
          <p className="text-[#111111] font-medium mt-1">
            ${regularprice}
            {oldprice && (
              <span className="text-[14px] font-light text-[#595959] line-through ml-2">
                ${oldprice}
              </span>
            )}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <img
                src={mainimage}
                alt={productname}
                className="w-full h-48 object-contain mx-auto"
              />
              <h2 className="text-xl font-bold text-gray-900 mt-4">
                {productname}
              </h2>
              <p className="text-lg font-medium text-gray-800 mt-2">
                ${regularprice}
              </p>
              {oldprice && (
                <p className="text-sm text-gray-500 line-through mt-1">
                  ${oldprice}
                </p>
              )}
              <div className="mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-black text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
