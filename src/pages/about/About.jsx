import React from "react";
import { Link } from "react-router-dom";
import { array, array2 } from "../../static";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className="container">
      <div className="links">
        <Link to={"/"}>Главная</Link>
      </div>
      <div className="about">
        <div className="about__hero">
          <div className="about__wrapper">
            <h2>О компании</h2>
            <div className="about__cards">
              <div className="about__card">
                <b>170+ </b>
                <p>Товаров</p>
              </div>
              <div className="about__card">
                <b>1000+ </b>
                <p>Довольных покупателей</p>
              </div>
              <div className="about__card">
                <b>170+ </b>
                <p>Товаров</p>
              </div>
            </div>
          </div>
          <div className="about__text">
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют. <br />
              <br />
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT! <br />
              <br />
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют. <br />
              <br />
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
      </div>
      <section className="cards">
        <div className="cards__title">
          <h2>Только проверенные бренды</h2>
          <div className="card__links">
            <button>
              <FaArrowLeftLong />
            </button>
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="card__items">
          {array?.map((el, index) => {
            return (
              <div key={index} className="card__item">
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
    </div>
  );
};

export default About;
