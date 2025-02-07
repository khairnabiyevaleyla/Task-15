import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#383E56]">
      <div className="max-w-[1600px] mx-5 py-20">
        <div className="grid gap-10 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="w-full lg:max-w-[480px]">
            <Link
              to="/"
              aria-label="Go home"
              title="Rokan"
              className="inline-flex items-center"
            >
              <img
                src="https://rokan-theme.myshopify.com/cdn/shop/files/logo_white.png?v=1719496957&width=165"
                className="w-[120px] h-[19px] object-cover"
                alt="Rokan Logo"
              />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-[#d3d3d3] mb-5">
                Our mission is to provide an unparalleled customer experience in
                the fashion industry, ensuring exceptional quality and service
                in every interaction.
              </p>
              <div className="flex mb-1">
                <p className="mr-1 text-white text-sm">Phone:</p>
                <Link
                  to="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-[#d3d3d3] text-sm"
                >
                  +222-1800-2628
                </Link>
              </div>
              <div className="flex mb-1">
                <p className="mr-1 text-white text-sm">Address:</p>
                <Link
                  to="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-[#d3d3d3] text-sm"
                >
                  502 New Design Str, Melbourne, Australia
                </Link>
              </div>
              <div className="flex">
                <p className="mr-1 text-white text-sm">Email:</p>
                <Link
                  to="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-[#d3d3d3] text-sm"
                >
                  rokan@domain.com
                </Link>
              </div>
              <div className="flex items-center mt-1 space-x-3">
                <Link to="/" className="text-white text-[25px] ">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link to="/" className="text-white text-[25px] ">
                  <i className="ri-tiktok-fill"></i>
                </Link>
                <Link to="/" className="text-white text-[25px] ">
                  <i className="ri-youtube-fill"></i>
                </Link>
                <Link to="/" className="text-white text-[25px] ">
                  <i className="ri-twitter-x-line"></i>
                </Link>
                <Link to="/" className="text-white text-[25px] ">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-[210px]">
            <p className="font-normal text-white text-[18px]">Our Company</p>
            <div className="flex mt-3 mb-2">
              <Link to="/about" className="text-sm text-[#d3d3d3]">
                About Us
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/stores" className="text-sm text-[#d3d3d3]">
                Our Stores
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/contact" className="text-sm text-[#d3d3d3]">
                Contact Us
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/size-guide" className="text-sm text-[#d3d3d3]">
                Size Guide
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/account" className="text-sm text-[#d3d3d3]">
                My Account
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/timeline" className="text-sm text-[#d3d3d3]">
                Timeline
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-[210px]">
            <p className="font-normal text-white text-[18px]">
              Customer Service
            </p>
            <div className="flex mt-3 mb-2">
              <Link to="/privacy-policy" className="text-sm text-[#d3d3d3]">
                Privacy Policy
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/faq" className="text-sm text-[#d3d3d3]">
                Theme FAQs
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/refund-policy" className="text-sm text-[#d3d3d3]">
                Refund Policy
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/advanced-search" className="text-sm text-[#d3d3d3]">
                Advanced Search
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/store-locations" className="text-sm text-[#d3d3d3]">
                Store Locations
              </Link>
            </div>
            <div className="flex mb-3">
              <Link to="/terms" className="text-sm text-[#d3d3d3]">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-[480px]">
            <p className="font-normal text-white text-[18px]">
              Sign Up To Newsletter
            </p>
            <div className="flex mt-3 mb-2">
              <p className="text-sm text-[#d3d3d3]">
                Sign up for exclusive updates, new arrivals & insider-only
                discounts
              </p>
            </div>
            <div className="flex flex-wrap space-y-2">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#383E56] border border-[#4C5370] rounded-3xl py-3 px-10 w-full outline-none"
                />
              </div>
              <div>
                <button className="bg-[#4C5370] text-white rounded-3xl py-3 px-6 w-full md:w-auto">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-[#d3d3d3]">
            © 2024 Rokan store. All rights reserved.
          </p>
          <img
            src="https://rokan-theme.myshopify.com/cdn/shop/files/payment.png?v=1720429135"
            alt="Payment methods"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
