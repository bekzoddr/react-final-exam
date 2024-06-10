import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/404.svg";
const NotFound = () => {
  return (
    <div className="not__found container">
      <img src={image} alt="404" />
      <p>Похоже, ничего не нашлось </p>
      <Button variant="contained">
        <Link to="/">На главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;
