import React from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <Categories />
      <br />
      <br />
      <br />
      <Products />
    </div>
  );
};

export default Home;
