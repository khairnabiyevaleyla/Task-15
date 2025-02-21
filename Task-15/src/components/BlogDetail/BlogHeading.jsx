import React from "react";
import { Link } from "react-router-dom";

const BlogHeading = ({ title }) => {
  return (
    <div>
      <div className="border-t border-[#E5E5E5]">
        <div className="mx-5 my-3">
          <ul className="flex flex-row items-center gap-2">
            <li>
              <Link to="/" className="font-archivo text-[15px] font-light">
                {" "}
                Home <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-archivo text-[15px] font-light">
                {" "}
                News <i className="ri-arrow-right-s-line "></i>
              </Link>
            </li>
            <li className="font-archivo text-[15px] font-light text-[#555555]">
              {title}
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <span className="rounded-[3px] text-[13px] border border-[#111111] py-[1px] px-[10px]">
          NEWS
        </span>
        <h2 className="text-[36px] font-medium">{title}</h2>
        <p className="text-[15px] uppercase font-medium">
          Bersky Bersky - <span className="font-light"> May 25 2024</span>
        </p>
      </div>
    </div>
  );
};

export default BlogHeading;
