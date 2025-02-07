import React, { useState, useEffect } from "react";
import CollectionCards from "../shared/CollectionCards/CollectionCards";
import { getAPI } from "../http/api";

const CollectionbyCategory = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    getAPI("/collectionbycategory", (data) => {
      setShowData(data);
      setFilteredData(data);
    });
  }, []);

  if (!showData || showData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-4">
      {showData.map((card, index) => (
        <CollectionCards key={index} {...card} size="category" />
      ))}
    </div>
  );
};

export default CollectionbyCategory;
