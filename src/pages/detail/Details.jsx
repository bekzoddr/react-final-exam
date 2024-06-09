import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/productsApi";
import Loading from "../../components/loading/Loading";
import { FaOdnoklassniki, FaVk, FaWhatsapp } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "@mui/material";
import { units } from "../../static";
const Details = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const [mainImage, setMainImage] = useState(null);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !product) {
    return <p>Error loading product details...</p>;
  }

  const handleImageClick = (imgSrc) => {
    setMainImage(imgSrc);
  };

  if (!mainImage && product.image.length > 0) {
    setMainImage(product.image[0]);
  }

  return (
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
            <button>-</button>1<button>+</button>
          </div>
          <Button className="to__cart" variant="contained">
            <b>В корзину</b>
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
  );
};

export default Details;
