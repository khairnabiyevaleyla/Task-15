import React from "react";
import BlogCategories from "../../components/Blogs/BlogSideBar/BlogCategories";
import PopularPosts from "../../components/Blogs/BlogSideBar/PopularPosts";
import BlogTags from "../../components/Blogs/BlogSideBar/BlogTags";
import AddBanner from "../../components/Products/SideBar/AddBanner";
import AllBlogs from "../../components/Blogs/AllBlogs/AllBlogs";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 my-5">
        <div className="lg:col-span-1 mx-4">
          <BlogCategories />
          <PopularPosts />
          <BlogTags />
          <AddBanner />
        </div>

        <div className="lg:col-span-4 ">
          <AllBlogs />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
