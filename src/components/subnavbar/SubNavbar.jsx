import React from "react";
import { NavLink } from "react-router-dom";
const SubNavbar = () => {
  return (
    <div className="sub__navbar">
      <div className="nav__infos">
        <li>
          <NavLink to={"/about"}>О компании</NavLink>
        </li>
        <li>
          <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
        </li>
        <li>
          <NavLink to={"/return"}>Возврат</NavLink>
        </li>
        <li>
          <NavLink to={"/garant"}>Гарантии</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Контакты</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Блог</NavLink>
        </li>
      </div>
      <div className="nav__phones">
        <p>8 (800) 890-46-56</p>
        <li>Заказать звонок</li>
      </div>
    </div>
  );
};

export default SubNavbar;
