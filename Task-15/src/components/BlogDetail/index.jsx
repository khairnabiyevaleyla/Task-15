import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../services/http";
import BlogBanner from "./BlogBanner";
import BlogHeading from "./BlogHeading";
import BlogText from "./BlogText";

const BlogContainer = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  const { data, isLoading } = useRequest(`blogs/:${id}`, {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
    },
  });

  useEffect(() => {
    if (data) {
      setBlogData(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!blogData) return <div>Blog not found</div>;

  return (
    <div className="">
      <BlogHeading title={blogData.title} />
      <BlogBanner />
      <BlogText />{" "}
    </div>
  );
};

export default BlogContainer;
