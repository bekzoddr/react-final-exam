import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";

const Wishlist = () => {
  const initialWishes = useSelector((state) => state.wishlist.value);
  const [wishes, setWishes] = useState(initialWishes || []); // Providing a default value
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [wishes]);

  useEffect(() => {
    if (initialWishes) {
      setWishes(initialWishes);
    }
  }, [initialWishes]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "200px",
        marginBottom: "30px",
      }}
    >
      {wishes.length ? (
        <Products title="Wishlist" data={wishes} />
      ) : (
        <h2>Empty</h2>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Wishlist;
