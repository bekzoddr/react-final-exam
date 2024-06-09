import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Loading from "../loading/Loading";
import { Scrollbar } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa6";
import { useGetCategoriesQuery } from "../../context/categoryApi";
import { useGetProductsQuery } from "../../context/productsApi";
import { brm } from "number-brm";
import { Link } from "react-router-dom";

const Products = () => {
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategoriesQuery();
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsQuery();

  if (categoriesLoading || productLoading) {
    return <Loading />;
  }

  if (categoriesError || productError) {
    return <p>Error loading data...</p>;
  }

  return (
    <div className="container">
      <div className="product__categories">
        {categoriesData ? (
          categoriesData.map((item) => <p key={item.id}>{item.title}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="products">
        {productData ? (
          productData.map((item) => (
            <div key={item.id} className="product__card">
              <Link to={`/detail/${item?.id}`}>
                <Swiper
                  scrollbar={{
                    hide: true,
                  }}
                  modules={[Scrollbar]}
                  className="product__image"
                >
                  {item?.image ? (
                    item.image.map((imgSrc, index) => (
                      <SwiperSlide className="card__image" key={index}>
                        <button>
                          <FaRegHeart />
                        </button>
                        <img
                          src={imgSrc}
                          alt={`${item.title} image ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <Loading />
                  )}
                </Swiper>
              </Link>
              <div className="card__body">
                <h2>{item.title}</h2>
                <div className="prices">
                  <s>
                    $
                    {(item.price.brm("string") * 2 - item.price * 1.5).toFixed(
                      2
                    )}
                  </s>
                  <b>${item.price.brm("string")}</b>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Products;
