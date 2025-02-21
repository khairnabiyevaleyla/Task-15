import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-[60px]">
      <Swiper ref={swiperRef} className="mySwiper">
        <SwiperSlide>
          <div className="max-w-4xl mx-auto my-10 px-4">
            <div className="mb-3">
              <ul className="flex text-[#FEC735] text-[16px] justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <i className="ri-star-fill"></i>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mb-3">
              <p className="text-[18px] text-[#111111] font-normal">
                One of the best looking eCommerce template. If you are looking
                for clean and minimal kind of template you should go with this.
                Thanks to all those who created this template.
              </p>
            </div>
            <div className="flex gap-1 justify-center">
              <p className="text-[14px] text-[#111111]">Robert Evans -</p>
              <span className="text-[14px] text-[#111111] font-light">
                Customer
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-4xl mx-auto my-10 px-4">
            <div className="mb-3">
              <ul className="flex text-[#FEC735] text-[16px] justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <i className="ri-star-fill"></i>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mb-3">
              <p className="text-[18px] text-[#111111] font-normal">
                Very unique Demos are available for any kind of e-commerce
                niche. I love it so much! Thank you for designing such an
                amazing eye-pleasing theme.
              </p>
            </div>
            <div className="flex gap-1 justify-center">
              <p className="text-[14px] text-[#111111]">Emily Jones -</p>
              <span className="text-[14px] text-[#111111] font-light">
                Customer
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-4xl mx-auto my-10 px-4">
            <div className="mb-3">
              <ul className="flex text-[#FEC735] text-[16px] justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <i className="ri-star-fill"></i>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mb-3">
              <p className="text-[18px] text-[#111111] font-normal">
                Such a great experience working with the author. They always go
                beyond their support! They care, they’re real and they deliver.
                What a combo! You’ve found the best theme ever.
              </p>
            </div>
            <div className="flex gap-1 justify-center">
              <p className="text-[14px] text-[#111111]">Susan Gibson -</p>
              <span className="text-[14px] text-[#111111] font-light">
                Customer
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-10 justify-center cursor-pointer mt-6">
        <img
          src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi3.png?v=1723001306"
          className={`w-[100px] h-[44px] object-cover sm:w-[140px] sm:h-[64px] ${
            activeIndex === 0 ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => handleImageClick(0)}
        />
        <img
          src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi1.png?v=1723001306"
          className={`w-[100px] h-[44px] object-cover sm:w-[140px] sm:h-[64px] ${
            activeIndex === 1 ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => handleImageClick(1)}
        />
        <img
          src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi2.png?v=1723001306"
          className={`w-[100px] h-[44px] object-cover sm:w-[140px] sm:h-[64px] ${
            activeIndex === 2 ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => handleImageClick(2)}
        />
      </div>
    </div>
  );
};

export default Testimonial;
