import React, { useRef, useState } from "react";
import { useCreateProductMutation } from "../../context/productsApi";
import { useGetCategoriesQuery } from "../../context/categoryApi";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const CreateProduct = () => {
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategoriesQuery();
  const [createProduct, { isLoading: productLoading }] =
    useCreateProductMutation();
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const category = useRef();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImages] = useState([]);

  const handleAddImageUrl = () => {
    setImages([...image, ""]);
  };

  const handleImageUrlChange = (index, value) => {
    const updatedImages = [...image];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      title: title.current.value.trim(),
      description: description.current.value.trim(),
      price: parseFloat(price.current.value),
      category: selectedCategory,
      image: image.filter((url) => url.trim() !== ""),
    };

    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.category ||
      newProduct.image.length === 0
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await createProduct(newProduct);
      toast.success("Product created successfully");
      title.current.value = "";
      description.current.value = "";
      price.current.value = "";
      category.current.value = "";
      setImages([]);
      setSelectedCategory("");
    } catch (error) {
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="create__products">
      <h3>Create Product</h3>
      <form onSubmit={handleCreateProduct}>
        <input ref={title} type="text" placeholder="Title" />
        <textarea
          ref={description}
          style={{ resize: "none" }}
          placeholder="Description"
        ></textarea>
        <input ref={price} type="number" placeholder="Price" step="0.01" />
        <select
          ref={category}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories &&
            categories.map((category, inx) => (
              <option key={inx} value={category.id}>
                {category.title}
              </option>
            ))}
        </select>
        <br />
        {image?.map((url, index) => (
          <div key={index}>
            <input
              type="url"
              placeholder={`Image URL ${index + 1}`}
              value={url}
              onChange={(e) => handleImageUrlChange(index, e.target.value)}
            />
          </div>
        ))}
        <Button
          variant="contained"
          className="add__image"
          type="button"
          onClick={handleAddImageUrl}
        >
          Add Image
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={productLoading || categoriesLoading}
        >
          {productLoading ? "Creating..." : "Add"}
        </Button>
      </form>
      {categoriesError && <p>Error loading categories...</p>}
    </div>
  );
};

export default CreateProduct;
