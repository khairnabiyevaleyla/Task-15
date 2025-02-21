import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="bg-white border-gray-200 pt-[20px] pb-[25px] mx-5">
        <div className="flex flex-wrap items-center justify-between  ">
          <a href="#" className="flex items-center">
            <img
              src="https://rokan-theme.myshopify.com/cdn/shop/files/logo.png?v=1719496953&width=165"
              className="h-6 mr-3 sm:h-[19px]"
              alt="Roken"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>
            <div>
              <div className="flex justify-end  mx-5">
                <ul className="flex flex-row gap-4 text-[22px] text-customGray">
                  <li className="custom-transition  cursor-pointer">
                    <i className="ri-search-line"></i>
                  </li>
                  <Link to="/register">
                    {" "}
                    <li className="custom-transition  cursor-pointer">
                      <i className="ri-user-line "></i>
                    </li>
                  </Link>

                  <li className="custom-transition  cursor-pointer relative">
                    <i className="ri-poker-hearts-line"></i>
                    <span className="absolute text-[10px] bg-black text-white w-[16px] h-[16px] rounded-full left-3 bottom-4 text-center">
                      0
                    </span>
                  </li>
                  <li className="custom-transition  cursor-pointer relative">
                    <i className="ri-shopping-bag-2-line"></i>
                    <span className="absolute text-[10px] bg-black text-white w-[16px] h-[16px] rounded-full left-3 bottom-4 text-center">
                      0
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-[14px] lg:text-[16px] font-normal text-[#111111] rounded lg:bg-transparent  lg:p-0  
                "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-2 pl-3 pr-4 text-[14px] lg:text-[16px] font-normal text-[#111111] rounded lg:bg-transparent  lg:p-0 
                "
                  aria-current="page"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-[14px] lg:text-[16px] font-normal text-[#111111] rounded lg:bg-transparent  lg:p-0 
                "
                  aria-current="page"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-[14px] lg:text-[16px] font-normal text-[#111111] rounded lg:bg-transparent  lg:p-0 
                "
                  aria-current="page"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pl-3 pr-4 text-[14px] lg:text-[16px] font-normal text-[#111111] rounded lg:bg-transparent  lg:p-0 
                "
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
