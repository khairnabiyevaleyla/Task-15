import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ link, page, title }) => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://rokan-theme.myshopify.com/cdn/shop/files/shop-banner.png?v=1716721518"
          className="w-full min-h-[200px] object-cover"
          alt="Shop Banner"
        />
        <div className="absolute text-white bottom-[30%] left-[50%] transform -translate-x-1/2 text-center">
          <h1 className="text-[40px] font-medium sm:text-[30px] xs:text-[24px]">
            {title}
          </h1>
          <nav>
            <ul className="flex justify-center gap-2 text-[14px]">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li>
                <Link to={link} className="text-white">
                  {page}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Banner;
