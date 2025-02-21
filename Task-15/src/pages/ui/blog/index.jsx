import React from "react";
import Banner from "../../../shared/Banner/Banner";
import Blogs from "../../../components/Blogs/Blogs";

const Blog = () => {
  return (
    <div>
      <Banner link="/blog" page="News" title="News" />
      <Blogs />
    </div>
  );
};

export default Blog;
