import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { array2 } from "../../static";
const BlogCards = () => {
  return (
    <div>
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
    </div>
  );
};

export default BlogCards;
