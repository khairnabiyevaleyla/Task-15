import React from "react";

const BlogBanner = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-[130px] my-6 sm:my-10 flex justify-center">
      <div className="rounded-[15px] overflow-hidden w-full max-w-[1170px] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[633px]">
        <img
          src="https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog1_d23d99a0-bb5b-4237-8004-c784365a26e2.jpg?v=1716719593&width=1100"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogBanner;
