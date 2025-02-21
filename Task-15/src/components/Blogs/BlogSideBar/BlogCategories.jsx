import React from "react";
import BlogSideBarTitle from "../../../shared/BlogSideBarTitle/BlogSideBarTitle";

const BlogCategories = () => {
  const lists = [
    {
      name: "News",
    },
    {
      name: "Events",
    },
    {
      name: "Life Style",
    },
    {
      name: "Healthier",
    },
    {
      name: "Technology",
    },
    {
      name: "Furniture",
    },
  ];
  return (
    <div className="py-5">
      <BlogSideBarTitle title="CATEGORY" />
      <div className="">
        <ul className="flex flex-col gap-2 my-10">
          {lists &&
            lists.map((list, index) => {
              return (
                <li
                  key={index}
                  className="text-[15px] text-[#555555] cursor-pointer font-light transition duration-500 hover:translate-x-4 hover:text-[#111111]"
                >
                  {list.name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories;
