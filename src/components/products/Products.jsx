import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { product } from "../../static";
const Products = () => {
  return (
    <div className="container">
      <div className="products">
        <div className="product__card">
          {product.map((item) => (
            <div key={item.id} className="product__card">
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                {item.image.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imgSrc}
                      alt={`${item.title} image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
