import React from "react";
import Loading from "../loading/Loading";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/footer-logo.svg";
import cards from "../../assets/images/cards.svg";
import icon from "../../assets/images/vk.icon.svg";
import { useGetCategoriesQuery } from "../../context/categoryApi";
const Footer = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data) {
    return null;
  }
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__links  footer__logo">
            <NavLink className="footer__logo" to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
            <p>8 (800) 890-46-56</p>
            <img src={cards} alt="cards" />
            <div className="footer__privacy">
              <li>Политика конфидециальности</li>
              <li>Пользовательское соглашение</li>
            </div>
            <div className="icons">
              {[...Array(3)].map((_, index) => (
                <img width={36} key={index} src={icon} alt="" />
              ))}
            </div>
          </div>
          <ul className="footer__links">
            <p className="footer__title">Покупателям</p>
            <NavLink to={"/about"}>О компании</NavLink>
            <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
            <NavLink to={"/return"}>Возврат</NavLink>
            <NavLink to={"/garant"}>Гарантии</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
            <NavLink to={"/blog"}>Блог</NavLink>
          </ul>
          <div className="footer__links">
            <p className="footer__title">Товары</p>
            <div className="footer__categories">
              {data?.map((category) => (
                <li key={category.id}>{category.title}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
