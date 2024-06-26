import React from "react";
import { Link } from "react-router-dom";

const Garant = () => {
  return (
    <div className="container">
      <div className="links">
        <Link to={"/"}>Главная</Link>
      </div>
      <div className="garant__wrapper">
        <div className="garant__title">
          <h2>Гарантии</h2>
        </div>
        <div className="garant__text">
          <p className="grant__text__title">
            Обмен и возврат по желанию покупателя
          </p>
          <p className="garant__info">
            Все товары в магазине «NornLight» имеют гарантию. Она заявляется
            производителем и имеет определенный срок действия на различные
            группы товаров. Если ваше изделие вышло из строя в
            течение гарантийного срока вы можете обратиться к нам и получить
            бесплатный ремонт. <br /> Для этого нужно:
            <li>
              Предоставить чек, накладную или сообщить почту или номер телефона,
              указанные при оформлении заказа.
            </li>
            <li>
              Привезти товар к нам на склад или отправить его транспортной
              компанией.
            </li>
            <li>
              После товар отправляется на экспертизу и ремонт. Если ремонт
              невозможен, мы обменяем изделие на аналогичное либо вернем деньги
              за покупку.
            </li>
            Обращаем внимание, что «А-Свет» не является сервисным центром, а
            выполняет роль посредника между клиентом и поставщиком. <br />{" "}
            Поэтому сроки проведения ремонта могут отличаться для товаров
            различных брендов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garant;
