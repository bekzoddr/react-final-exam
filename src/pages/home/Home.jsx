import React, { useState } from "react";
// import { useGetProductsQuery } from "../../context/api";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

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
    </div>
  );
};

export default Home;
