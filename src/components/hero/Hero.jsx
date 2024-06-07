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
        <SwiperSlide className="hero__item">
          <div className="hero__title">
            <h2>Скидка 15% на все подвесные светильники </h2>
            <button>до 5 февраля</button>
          </div>
          <div className="hero__image">
            <img width={453} height={453} src={image} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
