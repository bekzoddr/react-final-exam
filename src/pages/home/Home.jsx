import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Cards from "../../components/cards/Cards";
import { useGetProductsQuery } from "../../context/productsApi";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const [count, setCount] = useState(4);

  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductsQuery();

  if (productLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />
      <br />
      <br />
      <Categories />
      <br />
      <br />
      <br />
      <Products data={productData} />
      <br />
      <br />
      <br />
      <br />
      <Cards />
    </div>
  );
};

export default Home;
