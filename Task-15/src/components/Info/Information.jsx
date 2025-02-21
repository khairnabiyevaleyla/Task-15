import React from "react";

const Information = () => {
  const cardData = [
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/org_policy1.png?v=1722913050",
      title: "FREE SHIPPING",
      desc: "Get complimentary ground shipping on every order. Don't love it? Send it back, on us.",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/org_policy2.png?v=1722913050",
      title: "100% PAYMENT SECURE",
      desc: "Free returns within 10 days, please make sure the items are in undamaged condition.",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/org_policy3.png?v=1722913050",
      title: "SUPPORT 24/7",
      desc: "We support customers 24/7, send us questions and we will solve for you immediately.",
    },
  ];

  return (
    <div className="grid grid-cols-1 my-20 px-10 gap-5 sm:grid-cols-3">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center mb-3">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-[#111111] font-medium text-lg mb-2">
            {card.title}
          </h4>
          <p className="text-[#555555] text-[14px] w-[380px]">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Information;
