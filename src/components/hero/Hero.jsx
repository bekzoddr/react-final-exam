import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image from "../../assets/images/hero-image.svg";
export default function Hero() {
  return (
    <div className="hero container2">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="hero__item">
            <div className="hero__title">
              <p>Скидка 15% на все подвесные светильники </p>
              <button>до 5 февраля</button>
            </div>
            <div className="hero__image">
              <img src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
