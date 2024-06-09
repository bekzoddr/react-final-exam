import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11988.186351368808!2d69.23595135633975!3d41.307850109491575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sToshkent!5e0!3m2!1sen!2s!4v1717912964185!5m2!1sen!2s";
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="contact__title">
            <div className="links">
              <Link to={"/"}>Главная</Link>
            </div>
            <h2>Контакты</h2>
          </div>
          <div className="contact__info">
            <p className="contact__number">8 (800) 890-46-56</p>
            <p className="contact__time">
              Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину <br />{" "}
              Телефоны:
            </p>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="map__container">
          <iframe
            src={mapSrc}
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
          <div className="map__infos">
            <div className="map__info">
              <p className="map__title">Адрес магазина</p>
              <p className="map__value">г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div className="map__info">
              <p className="map__title">Почта</p>
              <p className="map__value">NORNLIGHT@mail.ru</p>
            </div>
            <div className="map__info">
              <p className="map__title">Телефон</p>
              <p className="map__value">8 (800) 890-46-56</p>
            </div>
            <Button variant="contained">Оставить заявку</Button>
          </div>
          <div className="map__infos responsive">
            <div className="map__info">
              <p className="map__title">Адрес магазина</p>
              <p className="map__value">г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div className="map__info">
              <p className="map__title">Почта</p>
              <p className="map__value">NORNLIGHT@mail.ru</p>
            </div>
            <div className="map__info">
              <p className="map__title">Телефон</p>
              <p className="map__value">8 (800) 890-46-56</p>
            </div>
            <Button variant="contained">Оставить заявку</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
