// import React, { useRef, useState } from "react";
// import {
//   useGetCategoriesQuery,
//   useCreateCategoryMutation,
//   useDeleteCategoryMutation,
// } from "../../context/categoryApi";
// import { toast } from "react-toastify";
// import Loading from "../../components/loading/Loading";
// import { Outlet, useNavigate } from "react-router-dom";
// const Admin = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   const title = useRef();
//   const { data, isLoading, isError } = useGetCategoriesQuery();
//   const [createCategory, { isLoading: loadingCategory }] =
//     useCreateCategoryMutation();
//   const [isCreatingCategory, setIsCreatingCategory] = useState(false);
//   const [deleteCategory] = useDeleteCategoryMutation(); // Destructure the deleteCategory mutation

//   const handleCreateCategory = async (e) => {
//     e.preventDefault();
//     const categoryTitle = title.current.value.trim();
//     if (!categoryTitle) {
//       toast.error("Category title cannot be empty");
//       return;
//     }

//     if (isCategoryExists(categoryTitle)) {
//       toast.error("Category already exists");
//       return;
//     }

//     if (isCreatingCategory) return;

//     try {
//       setIsCreatingCategory(true);
//       await createCategory({ title: categoryTitle });
//       toast.success("Category created successfully");
//       title.current.value = "";
//     } catch (error) {
//       toast.error("Failed to create category");
//     } finally {
//       setIsCreatingCategory(false);
//     }
//   };

//   const handleDeleteCategory = (id) => {
//     deleteCategory(id)
//       .then(() => toast.success("Category deleted successfully"))
//       .catch(() => toast.error("Failed to delete category"));
//   };

//   const isCategoryExists = (title) => {
//     return data.some((category) => category.title === title);
//   };

//   const categories = data?.map((el, index) => (
//     <div key={el.id}>
//       {index + 1}.{el.title}
//       <button onClick={() => handleDeleteCategory(el.id)}>Delete</button>
//     </div>
//   ));

//   return (
//     <div className="admin container">
//       <Outlet />
//       <form onSubmit={handleCreateCategory}>
//         <h1>Admin</h1>
//         {isError && <p>Something went wrong...</p>}
//         <input ref={title} type="text" />
//         <button disabled={loadingCategory || isCreatingCategory}>
//           {loadingCategory ? "Loading..." : "Create Category"}
//         </button>
//       </form>
//       <h2>Categories</h2>
//       {isLoading && <Loading />}
//       <div className="categories">{categories}</div>
//     </div>
//   );
// };

// export default Admin;
import React from "react";

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;
