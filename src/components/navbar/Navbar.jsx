import React, { useState, useEffect } from "react";
import SubNavbar from "../subnavbar/SubNavbar";
import logo from "../../assets/images/nav-logo.svg";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import icon from "../../assets/images/strategy__icon.svg";
import cancel from "../../assets/images/cancel.svg";
import menu from "../../assets/images/menu.svg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { useGetProductsQuery } from "../../context/productsApi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { data: products = [] } = useGetProductsQuery();
  const carts = useSelector((state) => state.cart.value);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    if (input) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchItemClick = () => {
    setShowSearchResults(false);
    setSearchInput("");
  };

  const handleBodyClick = () => {
    setShowSearchResults(null);
  };

  return (
    <nav>
      <div className="container" onClick={handleBodyClick}>
        <SubNavbar />
        <div className="navbar">
          <NavLink to={"/"}>
            <img src={logo} alt="nav__logo" />
          </NavLink>
          <button className="menu__button">
            <RiMenu2Fill className="menu-icon" />
            Каталог
          </button>
          <div className="nav__search">
            <input
              type="text"
              placeholder="Поиск по товарам"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button>
              <CiSearch className="search__icon" />
            </button>
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
            <Link to="/cart">
              <Badge color="success" badgeContent={carts.length}>
                <li>
                  <BsCart className="nav__icon" />
                  Корзина
                </li>
              </Badge>
            </Link>
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
              <NavLink to={"/"}>
                <img width={150} src={logo} alt="nav__logo" />
              </NavLink>
            )}
            <div className="links">
              {menuOpen ? <img width={19} src={icon} alt="nav__logo" /> : <></>}
              <Link to="/wishlist">
                <FaRegHeart className="nav__icon" />
              </Link>
              <Link to="/cart">
                <Badge color="success" badgeContent={carts.length}>
                  <BsCart className="nav__icon" />
                </Badge>
              </Link>
            </div>
          </div>
          <br />
          <div className="nav__search">
            <input
              type="text"
              placeholder="Поиск по товарам"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <CiSearch className="search__icon" />
          </div>
          <div className={`sidebar ${menuOpen ? "show" : "hide"}`}>
            <ul className="nav__infos">
              <li>
                <NavLink to={"/about"} onClick={closeMenu}>
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shipping"} onClick={closeMenu}>
                  Доставка и оплата
                </NavLink>
              </li>
              <li>
                <NavLink to={"/return"} onClick={closeMenu}>
                  Возврат
                </NavLink>
              </li>
              <li>
                <NavLink to={"/garant"} onClick={closeMenu}>
                  Гарантии
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={closeMenu}>
                  Контакты
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} onClick={closeMenu}>
                  Блог
                </NavLink>
              </li>
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
      {menuOpen && (
        <div className="search__overlay show" onClick={handleMenuClick}></div>
      )}
      {showSearchResults && (
        <div className="searched__items" onClick={handleSearchItemClick}>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li key={product.id}>
                  <Link to={`/detail/${product.id}`}>
                    <img width={40} src={product.image[0]} alt="" />
                    <p>{product.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
