import React from "react";

const Categories = () => {
  const categorieData = [
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_clt1.jpg?v=1724987751",
      title: "Earrings",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_clt2.jpg?v=1724987751",
      title: "Bracelets",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_clt3.jpg?v=1724987751",
      title: "Rings ",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_clt4.jpg?v=1724987751",
      title: "Necklaces",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_clt5.jpg?v=1724987751",
      title: "Weddings",
    },
  ];

  return (
    <div className="mx-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
      {categorieData.map((card, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover custom-image"
            />
          </div>
          <div className="mt-5">
            <p className="text-[18px] font-medium">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
