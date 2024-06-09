import React from "react";
import BlogCards from "../../components/blog__cards/BlogCards";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <div className="links">
          <Link to="/">Главная</Link>
        </div>
        <h2 className="blog__title">Блог</h2>
        <BlogCards />
        <BlogCards />
      </div>
    </div>
  );
};

export default Blog;
