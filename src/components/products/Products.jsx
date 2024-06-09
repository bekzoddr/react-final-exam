import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Loading from "../loading/Loading";
import { Scrollbar } from "swiper/modules";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useGetCategoriesQuery } from "../../context/categoryApi";
import { useGetProductsQuery } from "../../context/productsApi";
import { brm } from "number-brm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value) || [];
  const cart = useSelector((state) => state.cart.value);
  const [displayCount, setDisplayCount] = useState(8); // State to keep track of the number of cards to display

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

  const handleLoadMore = () => {
    // Increase the number of cards to display by 4
    setDisplayCount(displayCount + 4);
  };

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
          productData.slice(0, displayCount).map((item) => (
            <div key={item.id} className="product__card">
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
                      <button onClick={() => dispatch(toggleToWishes(item))}>
                        {Array.isArray(wishes) &&
                        wishes.some((w) => w.id === item.id) ? (
                          <FaHeart className="likes" />
                        ) : (
                          <FaRegHeart className="likes" />
                        )}
                      </button>
                      <Link to={`/detail/${item?.id}`}>
                        <img
                          src={imgSrc}
                          alt={`${item.title} image ${index + 1}`}
                        />
                      </Link>
                    </SwiperSlide>
                  ))
                ) : (
                  <Loading />
                )}
              </Swiper>
              <div className="card__body">
                <h2>{item.title}</h2>
                <div className="card__navigation">
                  <div className="prices">
                    <s>
                      $
                      {(
                        item.price.brm("string") * 2 -
                        item.price * 1.5
                      ).toFixed(2)}
                    </s>
                    <b>${item.price.brm("string")}</b>
                  </div>
                  <Button
                    onClick={() => dispatch(addToCart(item))}
                    className="add__to__cart"
                  >
                    <IoCartOutline />
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      {productData &&
        displayCount < productData.length && ( // Display "Load More" button if there are more cards to load
          <div className="load__more__container">
            <Button onClick={handleLoadMore} className="load__more__button">
              Load More
            </Button>
          </div>
        )}
    </div>
  );
};

export default Products;
