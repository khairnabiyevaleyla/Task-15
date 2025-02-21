import React from "react";

const BlogSideBarTitle = ({ title }) => {
  return (
    <div className="w-full">
      <h4 className="text-[18px] text-[#111111] font-medium border-b border-[#e5e5e5] relative blog-title pb-1">
        {title}
      </h4>
    </div>
  );
};

export default BlogSideBarTitle;
