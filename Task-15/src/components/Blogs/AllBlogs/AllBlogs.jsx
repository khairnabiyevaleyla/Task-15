import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "../../../services/http";

const AllBlogs = () => {
  const [pageSize, setPageSize] = useState(4);
  const [pageLimit, setPageLimit] = useState(1);
  const [term, setTerm] = useState("");

  const { data } = useRequest("blogs", {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
      "pagination[pageSize]": pageSize,
      "pagination[page]": pageLimit,
    },
  });

  const totalPage = Math.ceil((data?.meta?.pagination?.total ?? 0) / pageSize);
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-1 py-5">
        {data &&
          data?.data?.map((card, index) => (
            <div className="lg:w-[495px] sm:w-[420px] mx-auto" key={index}>
              <div>
                <div className="h-[268px] overflow-hidden relative rounded-[15px]">
                  <Link to={`/blog/${card.id}`}>
                    <img
                      className="custom-image w-full h-full object-cover"
                      src={`http://localhost:1337${card.image.url}`}
                      alt={card.title}
                    />
                  </Link>
                  <span className="absolute top-4 left-5 rounded-[3px] text-[13px] bg-[#ffff] text-[#111111] py-[1px] px-[10px]">
                    NEWS
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <span key={index} className="blog-tags">
                    {card.tagname}
                  </span>
                </div>
                <h3 className="text-[13px] text-[#111111] uppercase mt-5 mb-1">
                  Post by <span className="font-medium">Bersky Bersky</span> -
                  May 25 2024
                </h3>
                <h2 className="text-[20px] text-[#111111] font-medium">
                  {card.title}
                </h2>
                <p className="text-[14px] text-[#555555] font-light pb-5">
                  These are the people who make your life easier. Large tiles
                  were arranged on the countertop plate near the window of the
                  living room, they...
                </p>

                <p
                  className="underline pb-1 cursor-pointer"
                  onClick={() => {
                    navigate(`/blog/${card.id}`);
                  }}
                >
                  Continue Reading
                </p>
              </div>
            </div>
          ))}
      </div>
      {totalPage > 1 && (
        <div className="flex justify-center mt-6 gap-1">
          <button
            className="pagebtn"
            disabled={pageLimit === 1}
            onClick={() => setPageLimit((prev) => Math.max(prev - 1, 1))}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          {Array.from({ length: totalPage }, (_, index) => (
            <button
              key={index}
              className={`pagebtn ${pageLimit === index + 1 ? "active" : ""}`} // Add 'active' class if it's the current page
              onClick={() => setPageLimit(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="pagebtn"
            disabled={pageLimit === totalPage}
            onClick={() =>
              setPageLimit((prev) => Math.min(prev + 1, totalPage))
            }
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
