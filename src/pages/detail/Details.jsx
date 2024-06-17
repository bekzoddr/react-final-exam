import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/productsApi";
import Loading from "../../components/loading/Loading";
import { FaOdnoklassniki, FaVk, FaWhatsapp } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "@mui/material";
import { units } from "../../static";
import { useDispatch, useSelector } from "react-redux";
import { incCart, decCart, addToCart } from "../../context/cartSlice";

const Details = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const [mainImage, setMainImage] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      const cartProduct = cart.find((item) => item.id === product.id);
      if (cartProduct) {
        setProductQuantity(cartProduct.quantity);
      } else {
        setProductQuantity(1);
      }
    }
  }, [product, cart]);

  const handleImageClick = (imgSrc) => {
    setMainImage(imgSrc);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setProductQuantity(product.quantity);
  };

  const handleDecrement = () => {
    dispatch(decCart(product));
    setProductQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    dispatch(incCart(product));
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !product) {
    return <p>Error loading product details...</p>;
  }

  if (!mainImage && product.image.length > 0) {
    setMainImage(product.image[0]);
  }

  return (
    <div className="container">
      <div className="links">
        <Link to={"/"}>Главная</Link>
      </div>
      <div className="product__detail container">
        <div className="product__detail__images">
          <div className="product__images">
            {product.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${product.title} image ${index + 1}`}
                onClick={() => handleImageClick(imgSrc)}
              />
            ))}
          </div>
          {mainImage && (
            <img className="first__image" src={mainImage} alt={product.title} />
          )}
        </div>
        <div className="product__detail__info">
          <p className="product__title">{product.title}</p>
          <div className="apps">
            <div className="units">
              <p>Scott</p>
              <p>Артикул : 7655-188</p>
              <p className="sell">В наличии</p>
            </div>
            <div className="icons">
              <FaVk className="apps__icon" />
              <FaOdnoklassniki className="apps__icon" />
              <FaWhatsapp className="apps__icon" />
              <FaWhatsapp className="apps__icon" />
            </div>
          </div>
          <p className="product__price">{product.price} руб.</p>

          <p className="product__description">{product.description}</p>
          <div className="product__navigations">
            <div className="calculator">
              <button onClick={handleDecrement}>-</button>
              {productQuantity}
              <button onClick={handleIncrement}>+</button>
            </div>
            <Button
              className="to__cart"
              variant="contained"
              onClick={handleAddToCart}
            >
              <b>{product.quantity < 0 ? "Нет в наличии" : "В корзину"}</b>
            </Button>
            <Button variant="outlined" className="to__favourite">
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <div className="product__units">
          <p className="units__title">
            <b>Характеристика</b>
          </p>
          <div className="unit__items">
            {units.map((unit) => (
              <div
                style={{ backgroundColor: unit.background }}
                className="unit__item"
                key={unit.id}
              >
                <p className="unit__name">{unit.title}</p>
                <p className="unit__value">{unit.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
