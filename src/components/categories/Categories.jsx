import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { categories } from "../../static";
import { info } from "../../static";
const Categories = () => {
  return (
    <div className="container">
      <section>
        <div className="categories__title">
          <h2>Каталог</h2>
          <button>
            Весь каталог <FaArrowRightLong />
          </button>
        </div>
        <div className="categories">
          <div className="category__items">
            {categories.map((category) => {
              return (
                <div className="category__item" key={category.id}>
                  <div className="category__title">
                    <p className="category__name">{category.title}</p>
                    <p className="category__price">От 540₽</p>
                  </div>
                  <img src={category.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <div className="categories__title">
          <h2>Почему NORNLIGHT?</h2>
          <button>
            О компании
            <FaArrowRightLong />
          </button>
        </div>
        <div className="info__cards">
          {info?.map((el) => {
            return (
              <div className="info__card" key={el.id}>
                <div className="card__image">
                  <img src={el.image} alt="" />
                </div>
                <div className="card__title">
                  <h2>{el.title}</h2>
                  <p>{el.more}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Categories;
