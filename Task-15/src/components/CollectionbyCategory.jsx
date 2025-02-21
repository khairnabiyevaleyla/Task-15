import React from "react";
import CollectionCards from "../shared/CollectionCards/CollectionCards";
import { useRequest } from "../../../Task-15/src/services/http";

const CollectionbyCategory = () => {
  const { data } = useRequest("collectionbycategories", {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
    },
  });

  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-4">
      {data &&
        data?.data?.map((card, index) => (
          <CollectionCards
            key={index}
            image={`http://localhost:1337${card.image.url}`}
            title={card.title}
            size="category"
          />
        ))}
    </div>
  );
};

export default CollectionbyCategory;
