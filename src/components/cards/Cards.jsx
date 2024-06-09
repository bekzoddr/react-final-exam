import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { array } from "../../static";
import BlogCards from "../blog__cards/BlogCards";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === array.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? array.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <section className="cards">
        <div className="cards__title">
          <h2>Только проверенные бренды</h2>
          <div className="card__links">
            <button onClick={prevCard}>
              <FaArrowLeftLong />
            </button>
            <button onClick={nextCard}>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="card__items">
          {array?.map((el, index) => {
            return (
              <div
                key={index}
                className={`card__item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <img src={el} alt="card" />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <div className="categories__title">
          <h2>Блог</h2>
          <button>
            Перейти в блог
            <FaArrowRightLong />
          </button>
        </div>
        <BlogCards />
      </section>
      <section>
        <div className="text">
          <b>Производство светильников</b>
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.Покупая светильники в нашем интернет-магазине, вы получаете
            отличное соотношение цены и качества. Мы осуществляем доставку по
            всей России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cards;
