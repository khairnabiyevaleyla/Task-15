import React from "react";
import SideBarTitle from "../../../shared/SideBarTitle/SideBarTitle";

const Availability = () => {
  const lists = [
    {
      status: "In stock",
      count: "18",
    },
    {
      status: "Out of stock",
      count: "8",
    },
  ];

  return (
    <div className="border-b border-[#E5E5E5] py-5">
      <SideBarTitle heading="Availability" />
      <div>
        <ul className="flex flex-col gap-2">
          {lists &&
            lists.map((list, index) => {
              return (
                <li
                  key={index}
                  className="text-[15px] text-[#555555] cursor-pointer font-light transition duration-500 flex items-center justify-between gap-1 hover:text-[#111111]"
                >
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className="checkbox-input" />
                    {list.status}
                  </div>
                  <span className="text-[12px]">{`(${list.count})`}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Availability;
