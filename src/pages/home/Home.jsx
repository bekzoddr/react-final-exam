import React, { useState } from "react";
// import { useGetProductsQuery } from "../../context/api";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const [count, setCount] = useState(4);
  // const { data, error, isLoading } = useGetProductsQuery(count);

  // if (!data) {
  // return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

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
      <br />
      <br />
      <br />
      <br />
      <Cards />
    </div>
  );
};

export default Home;
