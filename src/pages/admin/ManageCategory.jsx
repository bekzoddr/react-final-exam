import React, { useState } from "react";
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../context/categoryApi";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import { CiEdit } from "react-icons/ci";

const ManageCategory = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [deleteCategory, { isLoading: deleteLoading }] =
    useDeleteCategoryMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
      .then(() => toast.success("Category deleted successfully"))
      .catch(() => toast.error("Failed to delete category"));
  };

  const handleEditCategory = (category) => {
    setCurrentCategory(category);
    setNewTitle(category.title);
    setIsEditing(true);
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      toast.error("Category title cannot be empty");
      return;
    }

    try {
      await updateCategory({ id: currentCategory.id, title: newTitle });
      toast.success("Category updated successfully");
      setIsEditing(false);
      setCurrentCategory(null);
      setNewTitle("");
    } catch (error) {
      toast.error("Failed to update category");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsEditing(false);
    }
  };

  const categories = data?.map((el, index) => (
    <div className="category__task" key={el.id}>
      <p>
        {index + 1}.{el.title}
      </p>
      <button onClick={() => handleDeleteCategory(el.id)}>Delete</button>
      <button onClick={() => handleEditCategory(el)}>
        <CiEdit />
      </button>
    </div>
  ));

  return (
    <div className="manage__categories">
      <h2>Manage Categories</h2>
      {isError && <p>Something went wrong...</p>}
      {isLoading && <Loading />}
      <div className="categoriess">{categories}</div>

      {isEditing && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay__content">
            <h2>Edit Category</h2>
            <form onSubmit={handleUpdateCategory}>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button type="submit" disabled={updateLoading}>
                {updateLoading ? "Updating..." : "Update Category"}
              </button>
              <button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategory;
