import React from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import { useRequest } from "../../services/http";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BestsellerProducts = () => {
  const { data } = useRequest("bestsellerproducts", {
    module: "devApi",
    method: "GET",
    params: {
      populate: "*",
    },
  });

  return (
    <div className="mx-5 mb-20 relative">
      <button className="custom-prev absolute left-[10px] top-[45%] transform -translate-y-1/2 z-10 text-[34px] text-[#111111] bg-[#F6F6F8] rounded-full w-[50px] h-[50px]">
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button className="custom-next absolute right-[10px] top-[45%] transform -translate-y-1/2 z-10 text-[34px] text-[#111111] bg-[#F6F6F8] rounded-full w-[50px] h-[50px]">
        <i className="ri-arrow-right-s-line"></i>
      </button>

      <Swiper
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.data?.map((card, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              productname={card.productname}
              regularprice={card.regularprice}
              oldprice={card.oldprice}
              dicounttag={card.dicounttag}
              regulartag={card.regulartag}
              mainimage={`http://localhost:1337${card.mainimage.url}`}
              hoverimage={`http://localhost:1337${card.hoverimage.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestsellerProducts;
