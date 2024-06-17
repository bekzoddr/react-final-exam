import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeFromCart, incCart, decCart } from "../../context/cartSlice";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/images/emty__cart.png";
const BOT_TOKEN = "7184075474:AAFpvvne1_JAWppwweJNhGf_zVREtkQTvFs";
const CHAT_ID = "-4246362668";

const Cart = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const handleOrder = () => {
    if (!name || !lastName || !email || !phone || !address) {
      toast.error("All fields are required.");
      return;
    }

    let text = "Buyurtma %0A%0A";
    text += `Ism: ${name} %0A`;
    text += `Familiya: ${lastName} %0A`;
    text += `Email: ${email} %0A`;
    text += `Telefon raqami: ${phone} %0A`;
    text += `Yetkazib berish manzili: ${address} %0A`;
    text += `Izoh: ${comment} %0A`;

    cart.forEach((product) => {
      text += `${product.title} %0A`;
      text += `Narxi: $${product.price} %0A`;
      text += `Soni: ${product.quantity} %0A`;
      text += `Jami: $${product.price * product.quantity} %0A`;
      text += `%0A%0A`;
      dispatch(removeFromCart(product));
    });
    text += `Jami narxi: $${calculateTotalPrice()}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setComment("");
    toast.success("Order placed successfully.");
  };

  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <div className="cart">
        <div className="cart__items__box">
          <div className="cart__names">
            <p>Фото</p>
            <p>Товары</p>
            <p>Описание</p>
            <p>Артикул</p>
            <p>Количество</p>
          </div>
          <div className="line"></div>
          {cart.length ? (
            cart.map((el) => (
              <div key={el.id} className="cart__item">
                <div className="cart__title">
                  <div className="cart__image">
                    <img src={el.image[0]} alt="" />
                  </div>
                  <div className="cart__name">
                    <p>{el.title}</p>
                    <b>${el.price * el.quantity} ₽</b>
                  </div>
                </div>
                <p className="cart__description">{el.description}</p>
                <p>{el.createdAt}</p>
                <div className="cart__navigations">
                  <div className="cart__calculator">
                    <button
                      disabled={el.quantity <= 1}
                      onClick={() => dispatch(decCart(el))}
                    >
                      -
                    </button>
                    <p>{el.quantity}</p>
                    <button onClick={() => dispatch(incCart(el))}>+</button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(el))}
                    className="delete"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="emtpty__cart">
              <img src={image} alt="image" />
              <Button className="back" variant="contained" href="/">
                Back to home
              </Button>
            </div>
          )}
        </div>
        {cart.length ? (
          <div className="cart__buy__box">
            <h2>Оформление</h2>
            <form className="form">
              <input
                placeholder="ФИО"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Фамилия"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                placeholder="Телефон"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                placeholder="Электронная почта"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
            <div className="line"></div>
            <h2>Доставка</h2>
            <form className="form form__delivery">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Адрес доставки"
                type="text"
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Комментарий"
              ></textarea>
            </form>
          </div>
        ) : (
          <></>
        )}
        {cart.length ? (
          <div className="all__carts">
            <div>
              <h2>Оплата</h2>
              <div className="all__products">
                {cart.map((el) => (
                  <div key={el.id} className="total__prices">
                    <span>{el.title}</span>
                    <span className="total">${el.price * el.quantity}</span>
                  </div>
                ))}
                <b>Total Price: ${calculateTotalPrice()}</b>
                <div className="submit">
                  <Button variant="contained" onClick={handleOrder}>
                    Купить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Cart;
