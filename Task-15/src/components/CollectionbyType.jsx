import React, { useState, useEffect } from "react";
import CollectionCards from "../shared/CollectionCards/CollectionCards";
import { getAPI } from "../http/api";

const CollectionbyType = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    getAPI("/collectionbytype", (data) => {
      setShowData(data);
      setFilteredData(data);
    });
  }, []);

  if (!showData || showData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-3">
        {showData.map((card, index) => (
          <CollectionCards key={index} {...card} size="type" />
        ))}
      </div>
    </div>
  );
};

export default CollectionbyType;
