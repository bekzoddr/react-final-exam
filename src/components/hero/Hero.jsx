import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../../assets/images/hero-image.svg";
const Hero = () => {
  return (
    <div className="container-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="hero__title">
              <h1>Скидка 15% на все подвесные светильники </h1>
              <button>до 5 февраля</button>
            </div>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
