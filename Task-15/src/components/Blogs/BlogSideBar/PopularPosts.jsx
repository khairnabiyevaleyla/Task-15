import React from "react";
import BlogSideBarTitle from "../../../shared/BlogSideBarTitle/BlogSideBarTitle";

const PopularPosts = () => {
  const posts = [
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog1_d23d99a0-bb5b-4237-8004-c784365a26e2.jpg?v=1716719593&width=940",
      title: "Exploring the Timeless Allure of Fashion",
      date: "May 25 2024",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog2_b85e6c39-6af8-4f89-962b-cc44ed806962.jpg?v=1716719648&width=940",
      title: "The History Of Patterned Dresses",
      date: "May 25 2024",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog11.jpg?v=1716694897&width=940",
      title: "Top 5 Picnic Fashion Of Girls",
      date: "May 25 2024",
    },
  ];
  return (
    <div className="">
      {" "}
      <BlogSideBarTitle title="POPULAR POSTS" />
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index} className="flex items-center gap-2 my-5 w-full">
              <div className="w-[80px] h-[80px] ">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[70%]">
                <h5 className="text-[14px] font-medium">{post.title}</h5>
                <p className="text-[#111111] text-[12px] font-medium">
                  {post.date}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PopularPosts;
