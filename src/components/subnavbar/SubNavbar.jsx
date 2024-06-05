import React from "react";
import { infos } from "../../static";
const SubNavbar = () => {
  return (
    <div className="sub__navbar">
      <div className="nav__infos">
        {infos?.map((el, inx) => (
          <li key={inx} className="nav__info">
            {el}
          </li>
        ))}
      </div>
      <div className="nav__phones">
        <p>8 (800) 890-46-56</p>
        <li>Заказать звонок</li>
      </div>
    </div>
  );
};

export default SubNavbar;
