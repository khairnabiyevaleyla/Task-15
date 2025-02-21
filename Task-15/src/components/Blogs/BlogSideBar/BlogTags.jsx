import React, { useState } from "react";
import BlogSideBarTitle from "../../../shared/BlogSideBarTitle/BlogSideBarTitle";
import { useRequest } from "../../../services/http";

const BlogTags = () => {
  const [tags, setTags] = useState("");

  const { data } = useRequest("tags", {
    module: "devApi",
    method: "GET",
  });

  return (
    <div className="pt-5">
      <BlogSideBarTitle title="TAGS" />
      <div className="my-5">
        {data?.data?.map((tag, index) => (
          <span key={index} className="blog-tags">
            {tag.tagname}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
