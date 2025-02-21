import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const Collection = () => {
  const lists = [
    {
      name: "Blazers",
    },
    {
      name: "Dresses",
    },
    {
      name: "Shirts",
    },
    {
      name: "Sportswear",
    },
    {
      name: "Sweaters",
    },
    {
      name: "Top T-shirt",
    },
  ];
  return (
    <div className="border-b border-[#E5E5E5] py-5">
      <SideBarTitle heading="Collection" />
      <div className="">
        <ul className="flex flex-col gap-2">
          {lists &&
            lists.map((list, index) => {
              return (
                <li
                  key={index}
                  className="text-[15px] text-[#555555] cursor-pointer font-light transition duration-500 hover:translate-x-4 hover:text-[#111111]"
                >
                  {list.name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Collection;
