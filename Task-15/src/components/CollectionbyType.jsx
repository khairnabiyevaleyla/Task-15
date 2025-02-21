import React from "react";
import CollectionCards from "../shared/CollectionCards/CollectionCards";
import { useRequest } from "../../../Task-15/src/services/http";
const CollectionbyType = () => {
  const { data } = useRequest("collectionbytypes", {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
    },
  });

  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-3">
        {data &&
          data?.data?.map((card, index) => (
            <CollectionCards
              key={index}
              image={`http://localhost:1337${card.image.url}`}
              title={card.title}
              size="type"
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionbyType;
