import React, { useRef, useState } from "react";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
} from "../../context/categoryApi";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import Button from "@mui/material/Button";
const CreateCategory = () => {
  const title = useRef();
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [createCategory, { isLoading: loadingCategory }] =
    useCreateCategoryMutation();
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const categoryTitle = title.current.value.trim();
    if (!categoryTitle) {
      toast.error("Category title cannot be empty");
      return;
    }

    if (data.some((category) => category.title === categoryTitle)) {
      toast.error("Category already exists");
      return;
    }

    if (isCreatingCategory) return;

    try {
      setIsCreatingCategory(true);
      await createCategory({ title: categoryTitle });
      toast.success("Category created successfully");
      title.current.value = "";
    } catch (error) {
      toast.error("Failed to create category");
    } finally {
      setIsCreatingCategory(false);
    }
  };

  const categories = data?.map((el, index) => (
    <div className="category__task" key={el.id}>
      <p>
        {index + 1}.{el.title}
      </p>
    </div>
  ));

  return (
    <div className="create__categories">
      <form onSubmit={handleCreateCategory}>
        <h1>Create Category</h1>
        {isError && <p>Something went wrong...</p>}
        <input ref={title} type="text" />
        <button disabled={loadingCategory || isCreatingCategory}>
          {loadingCategory ? "Loading..." : "Create Category"}
        </button>
      </form>
      {isLoading && <Loading />}
      <div className="categoriess">{categories}</div>
    </div>
  );
};

export default CreateCategory;
