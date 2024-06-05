import React, { useState } from "react";
import SubNavbar from "../subnavbar/SubNavbar";
import logo from "../../assets/images/nav-logo.svg";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import icon from "../../assets/images/strategy__icon.svg";
import cancel from "../../assets/images/cancel.svg";
import menu from "../../assets/images/menu.svg";
import { infos } from "../../static";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container">
        <SubNavbar />
        <div className="navbar">
          <img src={logo} alt="nav__logo" />
          <button className="menu__button">
            <RiMenu2Fill className="menu-icon" />
            Каталог
          </button>
          <div className="nav__search">
            <input type="text" placeholder="Поиск по товарам" />
            <CiSearch className="search__icon" />
          </div>
          <ul className="nav__links">
            <li>
              <FaRegHeart className="nav__icon" />
              Избранное
            </li>
            <li>
              <img width={19} src={icon} alt="" />
              Сравнение
            </li>
            <li>
              <BsCart className="nav__icon" />
              Корзина
            </li>
          </ul>
        </div>
        <div className="navbar__responsive">
          <div className="nav__items">
            <button className="menu" onClick={handleMenuClick}>
              {menuOpen ? (
                <img
                  src={cancel}
                  alt="cancel"
                  style={{ opacity: menuOpen ? 1 : 0, marginLeft: 25 }}
                />
              ) : (
                <img src={menu} className="menu-icon" />
              )}
            </button>
            {menuOpen ? (
              <div className="empty__line"></div>
            ) : (
              <img width={150} src={logo} alt="nav__logo" />
            )}
            <div className="links">
              {menuOpen ? <img width={19} src={icon} alt="nav__logo" /> : <></>}
              <FaRegHeart className="nav__icon" />
              <BsCart className="nav__icon" />
            </div>
          </div>
          <div className="nav__search">
            <input type="text" placeholder="Поиск по товарам" />
            <CiSearch className="search__icon" />
          </div>
          <div className={`sidebar ${menuOpen ? "show" : ""}`}>
            <ul className="nav__infos">
              {infos?.map((el, inx) => (
                <li key={inx} className="nav__info">
                  {el}
                </li>
              ))}
            </ul>
            <div className="n">
              <button className="menu__button">
                <RiMenu2Fill className="menu-icon" />
                Каталог
              </button>
              <br />
              <p style={{ textAlign: "center" }}>8 (800) 890-46-56</p>
              <li style={{ textAlign: "center" }}>Заказать звонок</li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
