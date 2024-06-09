import React from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11988.186351368808!2d69.23595135633975!3d41.307850109491575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sToshkent!5e0!3m2!1sen!2s!4v1717912964185!5m2!1sen!2s";

  return (
    <>
      <div className="container">
        <div className="links">
          <Link to={"/"}>Главная</Link>
        </div>
        <div className="shipping">
          <h2>Доставка и оплата</h2>
          <div className="shipping__infos">
            <div className="shipping__info">
              <b>Доставка</b>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а так же по
                всем странам СНГ. <span>Сроки доставки: 4—6 недель</span>
              </p>
            </div>
            <div className="shipping__info">
              <b>Курьерская доставка</b>
              <p>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                <span>от 5 000 ₽.</span> Заказы свыше <span>30 000 ₽</span>{" "}
                имеют бесплатную доставку, включительно 15 км от МКАД
              </p>
            </div>
            <div className="shipping__info">
              <b>Самовывоз</b>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: г. Москва,
                Дмитровское шоссе д.100 2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <iframe
          src={mapSrc}
          className="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </>
  );
};

export default Shipping;
