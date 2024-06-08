import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import card1 from "../../assets/images/brand-1.svg";
import card2 from "../../assets/images/brand-2.svg";
import card3 from "../../assets/images/brand-3.svg";
import card4 from "../../assets/images/brand-4.svg";
import blogImage1 from "../../assets/images/blog-image1.svg";
import blogImage2 from "../../assets/images/blog-image2.svg";
import blogImage3 from "../../assets/images/blog-image3.svg";
const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const array = [card1, card2, card3, card4];
  const array2 = [blogImage1, blogImage2, blogImage3];

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
        <div className="blog__cards">
          {array2?.map((el, index) => {
            return (
              <div key={index} className="blog__card">
                <div className="card__image">
                  <img src={el} alt="card" />
                </div>
                <div className="card__body">
                  <div className="card__title">
                    <>
                      <b>Как правильно освещать дом снаружи?</b>
                    </>
                    <MdOutlineArrowOutward className="card__icon" />
                  </div>
                  <p>01.01.2024</p>
                </div>
              </div>
            );
          })}
        </div>
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
