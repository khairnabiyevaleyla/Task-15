import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FollowUs = () => {
  const slidesData = [
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i1.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i4.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i3.jpg?v=1728634473&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i4.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i5.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i6.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i4.jpg?v=1728634474&width=533",
    },
    {
      image:
        "https://rokan-theme.myshopify.com/cdn/shop/files/jew_i4.jpg?v=1728634474&width=533",
    },
  ];
  return (
    <div className="relative mb-20">
      <button className="prev absolute left-[10px] top-[45%] transform -translate-y-1/2 z-10 text-[34px] text-[#111111] bg-[#F6F6F8] rounded-full w-[50px] h-[50px]">
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button className="next absolute right-[10px] top-[45%] transform -translate-y-1/2 z-10 text-[34px] text-[#111111] bg-[#F6F6F8] rounded-full w-[50px] h-[50px]">
        <i className="ri-arrow-right-s-line"></i>
      </button>
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-[284px] h-[284px] overflow-hidden">
              <div className="relative follow-image custom-image overflow-hidden">
                <img src={slide.image} className="w-full h-full object-cover" />
                <div className="icon absolute top-[45%] left-[40%] bg-[#fff] rounded-full w-[50px] h-[50px]">
                  <i className="ri-instagram-line text-[25px] flex justify-center items-center mt-1"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FollowUs;
