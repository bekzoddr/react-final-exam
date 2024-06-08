import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin">
      <div className="admin__dashboard container">
        <div className="admin__title">
          <button>
            <NavLink to="/">
              <HiArrowNarrowLeft />
            </NavLink>
          </button>
          <h2>Admin</h2>
        </div>
        <div className="admin__routes">
          <NavLink to={"/admin/create-product"}>Create product</NavLink>
          <NavLink to={"/admin/manage-products"}>Manage product</NavLink>
          <NavLink to={"/admin/create-category"}>Create category</NavLink>
          <NavLink to={"/admin/manage-category"}>Manage category</NavLink>
        </div>
        <button onClick={handleClick}>Logout</button>
      </div>
      <div className="admin__item container">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
